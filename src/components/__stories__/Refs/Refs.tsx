import { Box, Button, Input } from "@chakra-ui/react";
import { forwardRef, useRef } from "react";

export const Refs = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Box display="flex" gap="2rem" maxW="400px">
      <CustomInput ref={ref} />
      <CustomButton
        action={() => {
          ref.current?.focus();
        }}
      />
    </Box>
  );
};

const CustomInput = forwardRef<HTMLInputElement>((props, ref) => {
  return <Input placeholder="Focus me" ref={ref} />;
});

interface ButtonProps {
  action: () => void;
}

const CustomButton = ({ action }: ButtonProps) => {
  return (
    <Button colorScheme="teal" onClick={action}>
      Focus
    </Button>
  );
};
