import { ReactNode } from "react";

import { Checkbox } from "../../components/ui/checkbox";
import { useSelectableConsumer } from "./SelectableProvider";

interface IProps<Item> {
  children: ReactNode;
  item: Item;
}

export const SelectableItem = <Item,>({ children, item }: IProps<Item>) => {
  const { toggleItem, selectedItems } = useSelectableConsumer<Item>();

  return (
    <Checkbox
      isChecked={selectedItems.includes(item)}
      onChange={() => toggleItem(item)}
    >
      {children}
    </Checkbox>
  );
};
