import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@szymii/ui";
import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (story) => React.createElement(ChakraProvider, { children: story(), theme }),
];
