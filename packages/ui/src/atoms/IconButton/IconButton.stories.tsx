import { mdiDownload } from "@mdi/js";
import { Meta, StoryObj } from "@storybook/react";

import { IconButton } from ".";

export default {
  title: "Atoms/IconButton",
  component: IconButton,
} as Meta;

export const Primary: StoryObj = {
  args: {
    ariaLabel: "download file",
    title: "download",
    iconPath: mdiDownload,
    size: 1,
  },
};
