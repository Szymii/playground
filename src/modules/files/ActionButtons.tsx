import {
  Menu,
  MenuButton,
  IconButton as MenuIconButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  mdiDotsVertical,
  mdiDownload,
  mdiInformation,
  mdiInformationOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import { IconButton } from "components/_atoms";
import { useUselessContext } from "providers";
import { Attachment } from "types";

interface IProps {
  file: Attachment;
}

export const ActionButtons = ({ file }: IProps) => {
  const arrayOfButtons: Array<JSX.Element> = [];
  const { test } = useUselessContext();

  if (!file.inactivatedAt && !file.deletedAt) {
    arrayOfButtons.push(
      <IconButton
        ariaLabel="Download file"
        title="Download file"
        iconPath={mdiDownload}
        width="100%"
        onClick={() => {
          test();
          alert("Downloading");
        }}
      />,
    );
  }

  if (file.editedAt) {
    arrayOfButtons.push(
      <IconButton
        ariaLabel="Show edition reason"
        title="Show edition reason"
        iconPath={mdiInformationOutline}
        width="100%"
        onClick={() => {
          alert(file.editionReason);
        }}
      />,
    );
  }

  if (file.deletedAt) {
    arrayOfButtons.push(
      <IconButton
        ariaLabel="Show deletion reason"
        title="Show deletion reason"
        iconPath={mdiInformation}
        width="100%"
        onClick={() => {
          alert(file.deletionReason);
        }}
      />,
    );
  }

  if (!file.deletedAt && file.inactivatedAt) {
    arrayOfButtons.push(
      <IconButton
        ariaLabel="Show inactivation reason"
        title="Show inactivation reason"
        iconPath={mdiInformation}
        width="100%"
        onClick={() => {
          alert(file.inactivationReason);
        }}
      />,
    );
  }

  if (arrayOfButtons.length > 1) {
    return (
      <Menu>
        <MenuButton
          as={MenuIconButton}
          aria-label="Options"
          icon={<Icon size={1} path={mdiDotsVertical} />}
        />
        <MenuList>
          {arrayOfButtons.map(({ props }, index) => {
            return (
              <MenuItem
                key={index}
                icon={<Icon path={props.iconPath} size={1} />}
                aria-label={props.ariaLabel}
                onClick={props.onClick}
              >
                {props.title}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    );
  }

  return <>{arrayOfButtons[0]}</>;
};
