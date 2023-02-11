import { Container, Heading, VStack } from "@chakra-ui/react";
import { ErrorBoundary } from "@szymii/ui";
import { FilesList, FilesProvider } from "modules/files";

export const Files = () => {
  return (
    <FilesProvider>
      <Container p="2em">
        <Heading textAlign="center" mb="1em">
          Files
        </Heading>
        <VStack spacing="1em">
          <ErrorBoundary message="No files this time">
            <FilesList />
          </ErrorBoundary>
        </VStack>
      </Container>
    </FilesProvider>
  );
};
