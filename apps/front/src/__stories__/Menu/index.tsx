import {
  Button,
  Menu as ChakraMenu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";

import { EmptyAction } from "./EmptyAction";

interface IProps {
  children?: ReactNode;
}

export const Menu = ({ children }: IProps) => {
  return (
    <ChakraMenu autoSelect={false}>
      <MenuButton as={Button} variant="ghost" colorScheme="blue">
        Dostępne akcje
      </MenuButton>
      <MenuList p="4">
        <StyledWrapper>
          <EmptyAction />
          {children}
        </StyledWrapper>
      </MenuList>
    </ChakraMenu>
  );
};

const StyledWrapper = styled.div`
  & .empty-action-item {
    display: none;
  }

  &:not(:has(.stacked-action-item)) .empty-action-item {
    display: block;
  }
`;
