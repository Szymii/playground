import { Meta, StoryObj } from "@storybook/react";

import { Link } from ".";
import { withReactRouter } from "../../utils";

export default {
  component: Link,
  decorators: [withReactRouter()],
} as Meta<typeof Link>;

export const Default: StoryObj<typeof Link> = {
  args: {
    to: "/test",
    children: "Link",
  },
};
