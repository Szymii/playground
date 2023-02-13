import { IconButton as Button, ButtonProps } from "@chakra-ui/react";
import Icon from "@mdi/react";

interface IProps extends ButtonProps {
  iconPath: string;
  ariaLabel: string;
  title?: string;
  iconSize?: number;
}

export const IconButton = ({
  iconPath,
  ariaLabel,
  title,
  iconSize = 1,
  ...rest
}: IProps) => {
  return (
    <Button
      aria-label={ariaLabel}
      title={title}
      icon={<Icon size={iconSize} path={iconPath} />}
      {...rest}
    />
  );
};
