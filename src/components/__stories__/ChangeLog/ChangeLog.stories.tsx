import { ChakraProvider } from "@chakra-ui/react";
import { ComponentMeta } from "@storybook/react";
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
} as ComponentMeta<typeof ChangeLog>;

export const Default = () => {
  return (
    <>
      <ChangeLog />
    </>
  );
};
