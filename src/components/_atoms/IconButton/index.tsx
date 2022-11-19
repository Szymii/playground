import { IconButton as Button } from "@chakra-ui/react";
import Icon from "@mdi/react";

interface IProps {
  iconPath: string;
  ariaLabel: string;
  title?: string;
  size?: number;
  [rest: string]: any;
}

export const IconButton = ({
  iconPath,
  ariaLabel,
  title,
  color = "inherit",
  size = 1,
  ...rest
}: IProps) => {
  return (
    <Button
      aria-label={ariaLabel}
      title={title}
      icon={<Icon size={size} path={iconPath} />}
      {...rest}
    />
  );
};
