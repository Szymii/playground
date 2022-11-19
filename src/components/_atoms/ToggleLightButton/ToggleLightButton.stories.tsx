import { ChakraProvider } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
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
} as ComponentMeta<typeof ToggleLightButton>;

const Template: ComponentStory<typeof ToggleLightButton> = () => (
  <ToggleLightButton />
);

export const Default = Template.bind({});
