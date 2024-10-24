import { Button, HStack } from "@chakra-ui/react";
import {
  Document,
  PDFViewer,
  Page,
  StyleSheet,
  Text,
  View,
  pdf,
} from "@react-pdf/renderer";
import {
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
} from "components/ui/dialog";
import { createModalStore } from "helpers";
import { ComponentProps } from "react";

import { CustomPDF } from "./CustomPDF";

type IProps = ComponentProps<typeof CustomPDF>;

export const usePDFPreviewModal = createModalStore();

export const PDFPreviewModal = (props: IProps) => {
  const { isOpen, onClose } = usePDFPreviewModal();

  const downloadPDF = async () => {
    const pdfBlob = await pdf(<PDFDocument {...props} />).toBlob();
    const url = URL.createObjectURL(pdfBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "my-document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <DialogRoot open={isOpen}>
      <DialogBackdrop />
      <DialogContent>
        <DialogHeader>Preview</DialogHeader>
        <DialogCloseTrigger />
        <DialogBody pb="5">
          <PDFViewer width={600} height={400} showToolbar={false}>
            <PDFDocument {...props} />
          </PDFViewer>
        </DialogBody>
        <DialogFooter>
          <HStack>
            <Button
              onClick={async () => {
                await downloadPDF();
              }}
            >
              Download
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </HStack>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
};

const PDFDocument = (props: IProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View style={styles.header}>
          <Text>Custom PDF</Text>
        </View>
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text>From: </Text>
            <Text
              style={{
                color: "gray",
              }}
            >
              {props.email}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text>At: </Text>
            <Text
              style={{
                color: "gray",
              }}
            >
              {props.receivedAt}
            </Text>
          </View>
        </View>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quae
          reprehenderit? Atque, maxime harum. Fugiat ducimus inventore
          voluptatem, nemo quos velit neque eos, voluptate molestias eligendi
          aut harum, sed id? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quam, quae reprehenderit? Atque, maxime harum. Fugiat ducimus
          inventore voluptatem, nemo quos velit neque eos, voluptate molestias
          eligendi aut harum, sed id?
        </Text>
        <View>
          <Text>This was nice 🖐</Text>
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 20,
    display: "flex",
    gap: 25,
  },
  header: {
    fontSize: 24,
    fontWeight: "black",
  },
});
