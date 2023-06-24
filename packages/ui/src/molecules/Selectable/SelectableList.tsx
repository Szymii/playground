import { VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const SelectableList = ({ children }: IProps) => {
  return (
    <VStack pl={6} mt={1} spacing={1} align="stretch">
      {children}
    </VStack>
  );
};
