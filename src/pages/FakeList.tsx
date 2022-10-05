import { Container, Heading, VStack } from "@chakra-ui/react";
import { ErrorBoundary } from "../components";
import { FilesList } from "../components";

export const FakeList = () => {
  return (
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
  );
};
