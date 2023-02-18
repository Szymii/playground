import { Button } from "@chakra-ui/react";
import { Meta, StoryObj } from "@storybook/react";

import { Popover } from "./Popover";

export default {
  component: Popover,
  parameters: {
    a11y: { disable: true },
  },
} as Meta;

export const Default: StoryObj<typeof Popover> = {
  render: () => (
    <Popover>
      <Button position="fixed" top="20px" right="50%">
        Trigger
      </Button>
    </Popover>
  ),
};
