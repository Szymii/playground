import { ChakraProvider } from "@chakra-ui/react";
import { Meta } from "@storybook/react";
import { theme } from "theme";

import { Refs } from "./Refs";

export default {
  title: "Concept/Refs",
  component: Refs,
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    ),
  ],
} as Meta;

export const Default = () => {
  return (
    <>
      <Refs />
    </>
  );
};
