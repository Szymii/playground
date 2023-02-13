import { Flex, Slide } from "@chakra-ui/react";
import { mdiClose } from "@mdi/js";
import { ReactNode } from "react";

import { IconButton } from "../../atoms";

interface IProps {
  children: ReactNode;
  isOpen: boolean;
  close: () => void;
}

export const MobileMenu = ({ children, isOpen, close }: IProps) => {
  return (
    <Slide direction="right" in={isOpen} style={{ zIndex: 10 }}>
      <Flex
        position="absolute"
        top="0"
        bottom="0"
        right="0"
        minH="100vh"
        minW={{ sm: 64, base: "100%" }}
        paddingY={12}
        pr={24}
        pl={10}
        flexDirection="column"
        gap={2}
        bgColor="gray.700"
      >
        {children}
        <IconButton
          position="absolute"
          ariaLabel="collapse-menu"
          iconPath={mdiClose}
          top="1em"
          right="2em"
          onClick={close}
        />
      </Flex>
    </Slide>
  );
};
