import { Button } from "@chakra-ui/react";
import { Meta, StoryFn } from "@storybook/react";

import { Popover } from "./Popover";

export default {
  title: "Concept/Popover",
  component: Popover,
} as Meta;

export const Default: StoryFn = () => {
  return (
    <Popover>
      <Button position="fixed" top="20px" right="50%">
        Trigger
      </Button>
    </Popover>
  );
};
