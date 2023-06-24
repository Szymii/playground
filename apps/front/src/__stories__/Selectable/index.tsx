import { Button } from "@chakra-ui/react";
import {
  SelectableItem,
  SelectableList,
  SelectableProvider,
  useSelectableConsumer,
} from "@szymii/ui";

type Item = string;

const GetStateButton = () => {
  const { selectedItems } = useSelectableConsumer();

  return (
    <Button
      onClick={() => {
        console.log(selectedItems);
      }}
    >
      GetState
    </Button>
  );
};

export const Selectable = () => {
  return (
    <SelectableList>
      <SelectableProvider<Item> initialValue={["milk"]}>
        <SelectableItem item="coffee">☕ Coffee</SelectableItem>
        <SelectableItem item="milk">🥛 Milk</SelectableItem>
        <SelectableItem item="tea">🧉 Tea</SelectableItem>
        <GetStateButton />
      </SelectableProvider>
    </SelectableList>
  );
};
