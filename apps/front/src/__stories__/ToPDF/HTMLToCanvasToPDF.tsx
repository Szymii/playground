import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { mdiDownload } from "@mdi/js";
import { IconButton } from "@szymii/ui";
import { jsPDF } from "jspdf";
import { useRef } from "react";

interface IProps {
  email: string;
  receivedAt: string;
}

export const HTMLToCanvasToPDF = ({ email, receivedAt }: IProps) => {
  const cardRef = useRef(null);
  const pdf = new jsPDF("p", "mm", "a4");

  const downloadPDF = () => {
    if (cardRef.current)
      pdf.html(cardRef.current, {
        html2canvas: {
          scale: 0.235,
          width: 200,
        },
        callback: function (pdf) {
          pdf.save();
        },
      });
  };

  return (
    <Card.Root ref={cardRef} className="not-printable">
      <CardHeader pb={0}>
        <HStack w="100%" justifyContent="space-between">
          <Text>HTMLToCanvasToPDF</Text>
          <IconButton
            iconPath={mdiDownload}
            ariaLabel="download"
            onClick={downloadPDF}
          />
        </HStack>
      </CardHeader>
      <CardBody>
        <VStack align="start">
          <Text>
            From:{" "}
            <Text as="span" color="gray.400">
              {email}
            </Text>
          </Text>
          <Text>
            At:{" "}
            <Text as="span" color="gray.400">
              {receivedAt}
            </Text>
          </Text>
        </VStack>
        <Text mt={6}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quae
          reprehenderit? Atque, maxime harum. Fugiat ducimus inventore
          voluptatem, nemo quos velit neque eos, voluptate molestias eligendi
          aut harum, sed id? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quam, quae reprehenderit? Atque, maxime harum. Fugiat ducimus
          inventore voluptatem, nemo quos velit neque eos, voluptate molestias
          eligendi aut harum, sed id?
        </Text>
      </CardBody>
      <CardFooter>This was nice 🖐</CardFooter>
    </Card.Root>
  );
};
