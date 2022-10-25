import { Box, Spinner, Text } from "@chakra-ui/react";
import { ReactNode, Suspense } from "react";
import { ErrorBoundary as Boundary } from "react-error-boundary";

interface IProps {
  children: ReactNode;
  message: string;
}

export const ErrorBoundary = ({ children, message }: IProps) => {
  return (
    <Boundary
      fallback={
        <Box height="140px" textAlign="center">
          <Text>{message}</Text>
        </Box>
      }
    >
      <Suspense
        fallback={
          <Box height="140px" textAlign="center">
            <Spinner />
          </Box>
        }
      >
        {children}
      </Suspense>
    </Boundary>
  );
};
