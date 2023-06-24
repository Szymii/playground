import { Checkbox, CheckboxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

import { useSelectableConsumer } from "./SelectableProvider";

interface IProps<Item> extends CheckboxProps {
  children: ReactNode;
  item: Item;
}

export const SelectableItem = <Item,>({
  children,
  item,
  ...props
}: IProps<Item>) => {
  const { toggleItem, selectedItems } = useSelectableConsumer<Item>();

  return (
    <Checkbox
      {...props}
      isChecked={selectedItems.includes(item)}
      onChange={() => toggleItem(item)}
    >
      {children}
    </Checkbox>
  );
};
