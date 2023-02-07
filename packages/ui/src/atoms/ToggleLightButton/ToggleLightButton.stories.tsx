import { Meta, StoryFn } from "@storybook/react";

import { ToggleLightButton } from ".";

export default {
  title: "Atoms/ToggleLightButton",
  component: ToggleLightButton,
} as Meta;

const Template: StoryFn = () => <ToggleLightButton />;

export const Default = Template.bind({});
