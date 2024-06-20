import { Meta, StoryObj } from "@storybook/react";

import { Menu } from ".";
import { Action } from "./Action";

const meta = {
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Action title="Action One" description="This is the first one" />
        <Action title="Action Two" description="This is the second one" />
      </>
    ),
  },
};

export const Empty: Story = {
  args: {},
};
