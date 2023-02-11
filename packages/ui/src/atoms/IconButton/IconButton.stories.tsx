import { mdiDownload } from "@mdi/js";
import { Meta, StoryObj } from "@storybook/react";

import { IconButton } from ".";

export default {
  component: IconButton,
} as Meta<typeof IconButton>;

export const Default: StoryObj<typeof IconButton> = {
  args: {
    ariaLabel: "download file",
    title: "download",
    iconPath: mdiDownload,
    size: 1,
  },
};
