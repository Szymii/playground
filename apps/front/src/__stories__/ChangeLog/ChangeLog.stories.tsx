import { Meta, StoryObj } from "@storybook/react";

import { ChangeLog } from "./ChangeLog";

export default {
  component: ChangeLog,
  parameters: {
    a11y: { disable: true },
  },
} as Meta;

export const Default: StoryObj<typeof ChangeLog> = {};
