import { Container, HStack } from "@chakra-ui/react";
import { Link } from "@szymii/ui";
import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";

export const Tabs = () => {
  const [fileAmount, setFileAmount] = useState<number>(0);

  const addFileCount = () => {
    setFileAmount((prev) => prev + 1);
  };

  return (
    <Container p="2em">
      <HStack spacing={6} justify="center" mb={4}>
        <Link to={"/tabs/swz"}>SWZ</Link>
        <Link to={"/tabs/opiw"}>OPiW</Link>
      </HStack>
      <Outlet context={{ fileAmount, addFileCount }} />
    </Container>
  );
};

export const useFileAmount = () => {
  return useOutletContext<{
    fileAmount: number;
    addFileCount: () => void;
  }>();
};
