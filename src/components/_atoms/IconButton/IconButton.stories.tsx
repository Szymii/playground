import { ChakraProvider } from "@chakra-ui/react";
import { mdiDownload } from "@mdi/js";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { theme } from "src/theme";
import { IconButton } from ".";

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
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  ariaLabel: "download file",
  title: "download",
  iconPath: mdiDownload,
  size: 1,
};
