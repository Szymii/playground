import { ChakraProvider } from "@chakra-ui/react";
import { Meta, StoryFn } from "@storybook/react";
import { theme } from "theme";

import { ToggleLightButton } from ".";

export default {
  title: "Atoms/ToggleLightButton",
  component: ToggleLightButton,
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    ),
  ],
} as Meta;

const Template: StoryFn = () => <ToggleLightButton />;

export const Default = Template.bind({});
