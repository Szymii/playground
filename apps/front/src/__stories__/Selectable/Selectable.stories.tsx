import { Meta, StoryObj } from "@storybook/react";

import { Selectable } from ".";

const meta = {
  component: Selectable,
} satisfies Meta<typeof Selectable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
