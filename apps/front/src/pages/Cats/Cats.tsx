import { Container, Heading, VStack } from "@chakra-ui/react";
import { ErrorBoundary } from "@szymii/ui";
import { CatsList } from "modules/cats";

export const Cats = () => {
  return (
    <Container p="2em">
      <Heading textAlign="center" mb="1em">
        Cats
      </Heading>
      <VStack spacing="1em">
        <ErrorBoundary message="No cats this time">
          <CatsList heading="Cute" category="cute" />
          <CatsList heading="Box" category="box" />
          <CatsList heading="Sad" category="sad" />
        </ErrorBoundary>
      </VStack>
    </Container>
  );
};
