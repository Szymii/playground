import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "helpers";

import { Tabs } from "./Tabs";

const meta = {
  component: Tabs,
  decorators: [withRouter()],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
