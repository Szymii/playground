import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "helpers";

import { AsyncPic } from "./AsyncPic";

const meta = {
  component: AsyncPic,
  decorators: [
    withRouter({ download_url: `https://picsum.photos/id/2/5000/3333` }),
  ],
} satisfies Meta<typeof AsyncPic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
