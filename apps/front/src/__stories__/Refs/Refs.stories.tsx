import { Meta, StoryObj } from "@storybook/react";

import { Refs } from "./Refs";

export default {
  component: Refs,
  parameters: {
    a11y: { disable: true },
  },
} as Meta;

export const Default: StoryObj<typeof Refs> = {};
