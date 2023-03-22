import { Meta, StoryObj } from "@storybook/react";

import { Nav } from ".";
import { Link } from "../../atoms";
import { withReactRouter } from "../../utils";

const meta = {
  component: Nav,
  decorators: [withReactRouter()],
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
