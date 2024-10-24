import { Box, ListItem as CListItem } from "@chakra-ui/react";
import Icon from "@mdi/react";
import { getIconByExtension } from "helpers";
import { ReactNode } from "react";

export const ChildrenAsFunction = () => {
  return (
    <Box as="ul" gap={3}>
      {
        <ListItem extension={"pdf"}>
          {(path) => <Icon size={4} path={path} color="green" />}
        </ListItem>
      }
    </Box>
  );
};

interface IListItemProps {
  extension: string;
  children: (path: string) => ReactNode;
}

const ListItem = ({ extension, children }: IListItemProps) => {
  const path = getIconByExtension(extension);

  return <CListItem>{children(path)}</CListItem>;
};
