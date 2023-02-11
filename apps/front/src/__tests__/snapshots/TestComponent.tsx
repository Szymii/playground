import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export const TestComponent = () => {
  const [colorMode, toggleColorMode] = useState<"dark" | "white">("dark");

  return (
    <button
      onClick={() => {
        if (colorMode === "dark") toggleColorMode("white");
        else toggleColorMode("dark");
      }}
    >
      {colorMode === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
};
