import { Meta, StoryObj } from "@storybook/react";

import { ToggleLightButton } from ".";

const meta = {
  component: ToggleLightButton,
} satisfies Meta<typeof ToggleLightButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
