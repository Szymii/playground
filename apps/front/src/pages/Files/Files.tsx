import { Container, Heading, VStack } from "@chakra-ui/react";
import { ErrorBoundary } from "components";
import { FilesList } from "modules/files";
import { UselessContextProvider } from "providers";

export const Files = () => {
  return (
    <UselessContextProvider>
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
    </UselessContextProvider>
  );
};
