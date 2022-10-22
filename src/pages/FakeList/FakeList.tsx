import { Container, Heading, VStack } from "@chakra-ui/react";
import { ErrorBoundary, FilesList } from "src/components";
import { UselessContextProvider } from "src/providers";

export const FakeList = () => {
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
