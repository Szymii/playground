import { ChakraProvider } from "@chakra-ui/react";
import { Preview } from "@storybook/react";
import { theme } from "@szymii/ui";
import React from "react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (story) =>
      React.createElement(ChakraProvider, { children: story(), theme }),
  ],
};

export default preview;
