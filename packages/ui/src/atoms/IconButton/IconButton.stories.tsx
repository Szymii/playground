import { ChakraProvider } from "@chakra-ui/react";
import { mdiDownload } from "@mdi/js";
import { Meta, StoryObj } from "@storybook/react";

import { IconButton } from ".";
import { theme } from "../../theme";

export default {
  title: "Atoms/IconButton",
  component: IconButton,
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    ),
  ],
} as Meta;

export const Primary: StoryObj = {
  args: {
    ariaLabel: "download file",
    title: "download",
    iconPath: mdiDownload,
    size: 1,
  },
};
