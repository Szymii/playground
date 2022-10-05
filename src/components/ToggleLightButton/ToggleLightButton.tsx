import { Button, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export const ToggleLightButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} variant="ghost">
      {colorMode === "dark" ? <FaSun /> : <FaMoon />}
    </Button>
  );
};
