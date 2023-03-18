import { ChakraProvider } from "@chakra-ui/react";
import { Preview } from "@storybook/react";
import { theme } from "@szymii/ui";
import { initialize, mswDecorator } from "msw-storybook-addon";
import React from "react";

initialize();

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
    mswDecorator,
    (story) =>
      React.createElement(ChakraProvider, { children: story(), theme }),
  ],
};

export default preview;
