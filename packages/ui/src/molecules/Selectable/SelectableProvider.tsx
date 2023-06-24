import { ReactNode, createContext, useContext, useState } from "react";

interface IProps<Item> {
  children: ReactNode;
  initialValue?: Item[];
}

type ContextValue<Item> = {
  selectedItems: Item[];
  toggleItem: (item: Item) => void;
};

const SelectableContext = createContext<ContextValue<unknown> | undefined>(
  undefined,
);

export const SelectableProvider = <Item,>({
  children,
  initialValue,
}: IProps<Item>) => {
  const [selectedItems, setSelectedItems] = useState<Item[]>(
    initialValue || [],
  );

  const toggleItem = (item: Item) => {
    console.log(selectedItems);
    if (selectedItems.includes(item)) {
      setSelectedItems((prev) =>
        prev.filter((selectedItem) => selectedItem !== item),
      );
    } else {
      setSelectedItems((prev) => [...prev, item]);
    }
  };

  const contextValue: ContextValue<Item> = {
    selectedItems,
    toggleItem,
  };

  return (
    <SelectableContext.Provider value={contextValue as ContextValue<unknown>}>
      {children}
    </SelectableContext.Provider>
  );
};

export const useSelectableConsumer = <Item,>() => {
  const context = useContext(SelectableContext);
  if (context === undefined) {
    throw new Error(
      "useSelectableConsumer must be used within a SelectableProvider",
    );
  }

  return context as ContextValue<Item>;
};
