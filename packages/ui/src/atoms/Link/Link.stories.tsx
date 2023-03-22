import { Meta, StoryObj } from "@storybook/react";

import { Link } from ".";
import { withReactRouter } from "../../utils";

const meta = {
  component: Link,
  decorators: [withReactRouter()],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    to: "/test",
    children: "Link",
  },
};
