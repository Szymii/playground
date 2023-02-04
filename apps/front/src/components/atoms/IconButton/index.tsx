import { IconButton as Button } from "@chakra-ui/react";
import Icon from "@mdi/react";

interface IProps {
  iconPath: string;
  ariaLabel: string;
  title?: string;
  size?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [rest: string]: any;
}

export const IconButton = ({
  iconPath,
  ariaLabel,
  title,
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
