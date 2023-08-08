import { Button, Text, VStack } from "@chakra-ui/react";

import { useFileAmount } from "./Tabs";

export const TotalFilesCount = ({ type }: { type: string }) => {
  const { addFileCount, fileAmount } = useFileAmount();

  return (
    <VStack>
      <Text>Now there are only {fileAmount} files in total</Text>
      <Button onClick={addFileCount}>Add {type} file to the pool</Button>
    </VStack>
  );
};
