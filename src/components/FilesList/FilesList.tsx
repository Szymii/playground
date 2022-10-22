import { Box, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import Icon from "@mdi/react";
import { getIconByExtension } from "src/helpers";
import { useSuspense } from "src/hooks";
import { Attachment } from "src/types";
import { ActionButtons } from "./ActionButtons";

type Files = Array<Attachment>;

export const FilesList = () => {
  const { data } = useSuspense<Files>("files", "/api/files");

  return (
    <VStack spacing="15" w="100%">
      {data?.map((file) => (
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
