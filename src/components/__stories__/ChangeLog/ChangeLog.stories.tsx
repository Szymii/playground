import { ChakraProvider } from "@chakra-ui/react";
import { Meta, StoryFn } from "@storybook/react";
import { theme } from "theme";

import { ChangeLog } from "./ChangeLog";

export default {
  title: "Concept/ChangeLog",
  component: ChangeLog,
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    ),
  ],
} as Meta;

export const Default: StoryFn = () => (
  <>
    <ChangeLog />
  </>
);
