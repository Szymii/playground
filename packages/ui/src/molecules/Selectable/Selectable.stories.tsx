import { Meta, StoryObj } from "@storybook/react";

import { SelectableItem } from "./SelectableItem";
import { SelectableList } from "./SelectableList";
import { SelectableProvider } from "./SelectableProvider";

const meta = {
  component: SelectableList,
} satisfies Meta<typeof SelectableList>;

export default meta;
type Story = StoryObj<typeof meta>;

type Item = {
  value: string;
};

const cake = {
  value: "cake",
};

export const Default: Story = {
  args: {
    children: (
      <SelectableProvider<Item> initialValue={[cake]}>
        <SelectableItem<Item> item={cake}>🎂 Cake</SelectableItem>
        <SelectableItem<Item>
          item={{
            value: "ice cream",
          }}
        >
          🍨 Ice Cream
        </SelectableItem>
        <SelectableItem<Item>
          item={{
            value: "donat",
          }}
        >
          🍩 Donat
        </SelectableItem>
      </SelectableProvider>
    ),
  },
};
