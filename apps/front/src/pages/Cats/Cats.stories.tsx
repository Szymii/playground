import { Meta, StoryObj } from "@storybook/react";
import { withQueryClient } from "helpers";

import { Cats } from "./Cats";

export default {
  component: Cats,
  decorators: [withQueryClient()],
} as Meta;

export const Default: StoryObj<typeof Cats> = {};
