import { Container, Heading, VStack } from "@chakra-ui/react";
import { ErrorBoundary } from "../components";
import { FilesList } from "../components";
import { UselessContextProvider } from "../providers";

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
