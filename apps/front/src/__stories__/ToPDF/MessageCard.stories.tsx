import { Meta, StoryObj } from "@storybook/react";

import { MessageCard } from "./MessageCard";

const meta = {
  component: MessageCard,
  title: "__STORIES__/ToPDFConverter",
} satisfies Meta<typeof MessageCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    email: "smelze@madkom.pl",
    receivedAt: "16:46 09.08.2023",
  },
};
