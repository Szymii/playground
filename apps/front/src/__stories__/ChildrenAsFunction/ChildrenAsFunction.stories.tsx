import { Meta, StoryObj } from "@storybook/react";

import { ChildrenAsFunction } from ".";

const meta = {
  component: ChildrenAsFunction,
  parameters: {
    a11y: { disable: true },
  },
} satisfies Meta<typeof ChildrenAsFunction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
