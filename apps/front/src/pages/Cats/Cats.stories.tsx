import { Meta, StoryObj } from "@storybook/react";
import { withQueryClient } from "helpers";

import { Cats } from "./Cats";

const meta = {
  component: Cats,
  decorators: [withQueryClient()],
} satisfies Meta<typeof Cats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
