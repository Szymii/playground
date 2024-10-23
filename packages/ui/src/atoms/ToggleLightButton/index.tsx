import { Button } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

import { useColorMode } from "../../components/ui/color-mode";

export const ToggleLightButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      variant="ghost"
      aria-label="toggle light mode"
    >
      {colorMode === "dark" ? <FaSun /> : <FaMoon />}
    </Button>
  );
};
