import { mdiDownload } from "@mdi/js";
import { Meta, StoryObj } from "@storybook/react";

import { IconButton } from ".";

const meta = {
  title: "Atoms/IconButton",
  component: IconButton,
} as Meta<typeof IconButton>;

export default meta;

export const Default: StoryObj<typeof IconButton> = {
  args: {
    ariaLabel: "download file",
    title: "download",
    iconPath: mdiDownload,
    size: 1,
  },
};
