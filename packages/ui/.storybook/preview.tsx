import { ChakraProvider } from "@chakra-ui/react";
import { Preview } from "@storybook/react";
import React from "react";

import { ColorModeProvider } from "../src/components/ui/color-mode";
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
    (Story) => (
      <ChakraProvider value={theme}>
        <ColorModeProvider>
          <Story />
        </ColorModeProvider>
      </ChakraProvider>
    ),
  ],
};

export default preview;
