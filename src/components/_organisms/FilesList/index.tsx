import { Box, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import Icon from "@mdi/react";
import { getIconByExtension } from "src/helpers";
import { useFilesQuery } from "src/modules/files";
import { ActionButtons } from "./ActionButtons";

export const FilesList = () => {
  const files = useFilesQuery();

  return (
    <VStack spacing="15" w="100%">
      {files?.map((file) => (
        <HStack w="100%" spacing="15px" key={file.id}>
          <Box>
            <Icon path={getIconByExtension(file.fileExtension)} size={1.5} />
          </Box>
          <Box w="100%">
            <VStack alignItems="flex-start">
              <Text noOfLines={1} maxW="200px">
                {file.fileName}
              </Text>
              <Text fontSize=".8rem">Created at: {file.createdAt}</Text>
            </VStack>
          </Box>
          <Spacer />
          <Box>
            <ActionButtons file={file} />
          </Box>
        </HStack>
      ))}
    </VStack>
  );
};