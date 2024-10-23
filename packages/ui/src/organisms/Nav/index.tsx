import { Flex, FlexProps, useDisclosure } from "@chakra-ui/react";
import { mdiHamburger } from "@mdi/js";
import { ReactNode } from "react";

import { IconButton, ToggleLightButton } from "../../atoms";
import { MobileMenu } from "./MobileMenu";

export const Nav = ({ children }: { children: ReactNode }) => {
  const { onOpen, open, onClose } = useDisclosure();

  return (
    <>
      <Wrapper display={{ base: "none", md: "flex" }}>
        {children}
        <ToggleLightButton />
      </Wrapper>
      <Wrapper display={{ base: "flex", md: "none" }}>
        <MobileMenu close={onClose} isOpen={open}>
          {children}
        </MobileMenu>
        <IconButton
          ariaLabel="toggle-menu"
          iconPath={mdiHamburger}
          onClick={onOpen}
        />
      </Wrapper>
    </>
  );
};

interface IWrapper extends FlexProps {
  children: ReactNode;
}

const Wrapper = ({ children, ...rest }: IWrapper) => {
  return (
    <Flex
      justifyContent="flex-end"
      alignItems="center"
      px="2em"
      py="0.5em"
      gap="1em"
      {...rest}
    >
      {children}
    </Flex>
  );
};
