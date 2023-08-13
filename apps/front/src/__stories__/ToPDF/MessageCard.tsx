import { VStack } from "@chakra-ui/react";

import { CustomPDF } from "./CustomPDF";
import { HTMLToCanvasToPDF } from "./HTMLToCanvasToPDF";
import { HTMLToImgToPDF } from "./HTMLToImgToPDF";
import { HTMLToPDF } from "./HTMLToPDF";

interface IProps {
  email: string;
  receivedAt: string;
}

export const MessageCard = (props: IProps) => {
  return (
    <VStack>
      <HTMLToPDF {...props} />
      <HTMLToImgToPDF {...props} />
      <HTMLToCanvasToPDF {...props} />
      <CustomPDF {...props} />
    </VStack>
  );
};
