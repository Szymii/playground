import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "helpers";

import { AsyncPic } from "./AsyncPic";

export default {
  component: AsyncPic,
  decorators: [
    withRouter({ download_url: `https://picsum.photos/id/2/5000/3333` }),
  ],
} as Meta;

export const Default: StoryObj<typeof AsyncPic> = {};
