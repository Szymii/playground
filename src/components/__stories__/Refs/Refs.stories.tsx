import { ChakraProvider } from "@chakra-ui/react";
import { ComponentMeta } from "@storybook/react";
import { theme } from "../../../theme";
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
} as ComponentMeta<typeof Refs>;

export const Default = () => {
  return (
    <>
      <Refs />
    </>
  );
};
