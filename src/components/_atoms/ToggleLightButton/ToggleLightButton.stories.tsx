import { ChakraProvider } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { theme } from "src/theme";
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