import { Meta, StoryObj } from "@storybook/react";
import { withQueryClient } from "helpers";

import { Cats } from "./Cats";

export default {
  title: "Pages/Cats",
  component: Cats,
  decorators: [withQueryClient()],
} as Meta<typeof Cats>;

export const Default: StoryObj<typeof Cats> = {};
