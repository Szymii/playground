import { Button, ChakraProvider } from "@chakra-ui/react";
import { ComponentMeta } from "@storybook/react";
import { theme } from "theme";

import { Popover } from "./Popover";

export default {
  title: "Concept/Popover",
  component: Popover,
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    ),
  ],
} as ComponentMeta<typeof Popover>;

export const Default = () => {
  return (
    <Popover>
      <Button position="fixed" top="20px" right="50%">
        Trigger
      </Button>
    </Popover>
  );
};
