import type { ButtonProps as ChakraCloseButtonProps } from "@chakra-ui/react";
import { IconButton as ChakraIconButton } from "@chakra-ui/react";
import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { forwardRef } from "react";

export interface CloseButtonProps extends ChakraCloseButtonProps {}

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  function CloseButton(props, ref) {
    return (
      <ChakraIconButton variant="ghost" aria-label="Close" ref={ref} {...props}>
        {props.children ?? <Icon path={mdiClose} size={1} />}
      </ChakraIconButton>
    );
  },
);
