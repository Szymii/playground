import { Meta, StoryObj } from "@storybook/react";

import { Nav } from ".";
import { Link } from "../../atoms";
import { withReactRouter } from "../../utils";

export default {
  component: Nav,
  decorators: [withReactRouter()],
} as Meta;

export const Default: StoryObj<typeof Nav> = {};

export const WithLinks: StoryObj<typeof Nav> = {
  args: {
    children: (
      <>
        <Link to="/">Link 1</Link>
        <Link to="/">Link 2</Link>
        <Link to="/">Link 3</Link>
      </>
    ),
  },
};
