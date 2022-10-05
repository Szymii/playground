import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: "body",
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("white", "gray.800")(props),
      },
    }),
  },
});
