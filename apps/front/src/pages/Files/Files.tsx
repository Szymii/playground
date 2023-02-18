import { Container, Heading, VStack } from "@chakra-ui/react";
import { ErrorBoundary } from "@szymii/ui";
import { FilesList, FilesProvider } from "modules/files";

export const Files = () => {
  return (
    <Container p="2em">
      <Heading textAlign="center" mb="1em">
        Files
      </Heading>
      <VStack spacing="1em">
        <ErrorBoundary message="No files this time">
          <FilesProvider>
            <FilesList />
          </FilesProvider>
        </ErrorBoundary>
      </VStack>
    </Container>
  );
};
