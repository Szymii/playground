import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

import { ToggleLightButton } from "../../atoms";

export const Nav = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      justifyContent="flex-end"
      alignItems="center"
      px="2em"
      py="0.5em"
      gap="1em"
    >
      {children}
      <ToggleLightButton />
    </Flex>
  );
};
