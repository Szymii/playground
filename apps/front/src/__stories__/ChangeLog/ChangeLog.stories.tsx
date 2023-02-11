import { Meta, StoryFn } from "@storybook/react";

import { ChangeLog } from "./ChangeLog";

export default {
  title: "Concept/ChangeLog",
  component: ChangeLog,
} as Meta;

export const Default: StoryFn = () => (
  <>
    <ChangeLog />
  </>
);
