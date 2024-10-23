import { Link as CLink } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

interface IProps {
  to: string;
  children: ReactNode;
}

export const Link = ({ to, children }: IProps) => {
  return (
    <CLink asChild fontSize="1.4rem" fontWeight="bold">
      <RouterLink to={to}>{children}</RouterLink>
    </CLink>
  );
};
