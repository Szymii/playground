import { ChakraProvider } from "@chakra-ui/react";
import { Preview } from "@storybook/react";
import React from "react";

import { theme } from "../src/theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    a11y: { disable: false },
    snapshot: { disable: false },
  },
  decorators: [
    (story) =>
      React.createElement(ChakraProvider, { children: story(), theme }),
  ],
};

export default preview;
