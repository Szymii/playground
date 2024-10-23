import * as _chakra_ui_react from '@chakra-ui/react';
import { ButtonProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

declare const ToggleLightButton: () => JSX.Element;

interface IProps$5 extends ButtonProps {
    iconPath: string;
    ariaLabel: string;
    title?: string;
    iconSize?: number;
}
declare const IconButton: ({ iconPath, ariaLabel, title, iconSize, ...rest }: IProps$5) => JSX.Element;

interface IProps$4 {
    to: string;
    children: ReactNode;
}
declare const Link: ({ to, children }: IProps$4) => JSX.Element;

interface IProps$3 {
    children: ReactNode;
    message: string;
}
declare const ErrorBoundary: ({ children, message }: IProps$3) => JSX.Element;

interface IProps$2<Item> {
    children: ReactNode;
    item: Item;
}
declare const SelectableItem: <Item>({ children, item }: IProps$2<Item>) => null;

interface IProps$1 {
    children: ReactNode;
}
declare const SelectableList: ({ children }: IProps$1) => JSX.Element;

interface IProps<Item> {
    children: ReactNode;
    initialValue?: Item[];
}
type ContextValue<Item> = {
    selectedItems: Item[];
    toggleItem: (item: Item) => void;
};
declare const SelectableProvider: <Item>({ children, initialValue, }: IProps<Item>) => JSX.Element;
declare const useSelectableConsumer: <Item>() => ContextValue<Item>;

declare const Nav: ({ children }: {
    children: ReactNode;
}) => JSX.Element;

declare const theme: _chakra_ui_react.SystemContext;

export { ErrorBoundary, IconButton, Link, Nav, SelectableItem, SelectableList, SelectableProvider, ToggleLightButton, theme, useSelectableConsumer };
