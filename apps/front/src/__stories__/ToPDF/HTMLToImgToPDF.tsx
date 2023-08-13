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
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useRef } from "react";

interface IProps {
  email: string;
  receivedAt: string;
}

export const HTMLToImgToPDF = ({ email, receivedAt }: IProps) => {
  const cardRef = useRef(null);

  const downloadPDF = () => {
    if (cardRef.current) {
      html2canvas(cardRef.current).then((canvas) => {
        const myImage = canvas.toDataURL("image/jpeg", 1);
        const imgWidth = (canvas.width * 60) / 263;
        const imgHeight = (canvas.height * 70) / 225;
        const pdf = new jsPDF("p", "mm", "a4");

        pdf.addImage(myImage, "png", 0, 0, imgWidth, imgHeight);
        pdf.save(`image.pdf`);
      });
    }
  };

  return (
    <Card ref={cardRef}>
      <CardHeader pb={0}>
        <HStack w="100%" justifyContent="space-between">
          <Text>HTMLToImgToPDF</Text>
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
      <CardFooter>This was nice</CardFooter>
    </Card>
  );
};
