import {
  IconButton as CIconButton,
  MenuContent,
  MenuItem,
  MenuRoot,
} from "@chakra-ui/react";
import {
  mdiDotsVertical,
  mdiDownload,
  mdiInformation,
  mdiInformationOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import { IconButton } from "@szymii/ui";

import { IAttachment } from "./IAttachment";

interface IProps {
  file: IAttachment;
}

interface IMenuItem {
  iconPath: string;
  ariaLabel: string;
  title: string;
  onClick: () => void;
}

export const ActionButtons = ({ file }: IProps) => {
  const arrayOfButtons: Array<JSX.Element> = [];

  if (!file.inactivatedAt && !file.deletedAt) {
    arrayOfButtons.push(
      <IconButton
        ariaLabel="Download file"
        title="Download file"
        iconPath={mdiDownload}
        width="100%"
        onClick={() => {
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
      <MenuRoot>
        <CIconButton aria-label="Options">
          <Icon size={1} path={mdiDotsVertical} />
        </CIconButton>
        <MenuContent>
          {arrayOfButtons.map(({ props }, index) => {
            // eslint-disable-next-line react/prop-types
            const { iconPath, ariaLabel, onClick, title } = props as IMenuItem;
            return (
              <MenuItem
                key={index}
                aria-label={ariaLabel}
                onClick={onClick}
                value={title}
              >
                <Icon path={iconPath} size={1} />
                {title}
              </MenuItem>
            );
          })}
        </MenuContent>
      </MenuRoot>
    );
  }

  return <>{arrayOfButtons[0]}</>;
};
