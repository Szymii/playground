import { Heading, VStack } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

import { CustomPDF } from "./CustomPDF";
import { HTMLToCanvasToPDF } from "./HTMLToCanvasToPDF";
import { HTMLToImgToPDF } from "./HTMLToImgToPDF";
import { HTMLToPDF } from "./HTMLToPDF";
import { NativeSolution } from "./NativeSolution";

interface IProps {
  email: string;
  receivedAt: string;
}

export const MessageCard = (props: IProps) => {
  return (
    <VStack>
      <Global
        styles={css`
          @media print {
            body {
              visibility: hidden;
            }
            .printable {
              display: block !important;
              visibility: visible;
            }
            .not-printable {
              display: none !important;
            }
          }
        `}
      />
      <Heading display={"none"} className="printable">
        Nagłówek widoczny tylko przy wydruku
      </Heading>
      <NativeSolution {...props} />
      <HTMLToPDF {...props} />
      <HTMLToImgToPDF {...props} />
      <HTMLToCanvasToPDF {...props} />
      <CustomPDF {...props} />
      <NativeSolution {...props} />
    </VStack>
  );
};
