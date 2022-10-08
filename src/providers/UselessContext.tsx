import { createContext, ReactNode, useContext } from "react";

interface IProps {
  children: ReactNode;
}

const UselessContext = createContext<{ test: () => void } | undefined>(
  undefined
);

export const UselessContextProvider = ({ children }: IProps) => {
  const value = {
    test: () => {
      console.log("No useful data provided");
    },
  };
  return (
    <UselessContext.Provider value={value}>{children}</UselessContext.Provider>
  );
};

export const useUselessContext = () => {
  const context = useContext(UselessContext);
  if (context === undefined) {
    throw new Error("useUselessContext must be used within a UselessContext");
  }
  return context;
};
