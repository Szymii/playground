import { Meta, StoryObj } from "@storybook/react";

import { FormWithReactSelect } from ".";

const meta = {
  component: FormWithReactSelect,
} satisfies Meta<typeof FormWithReactSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
