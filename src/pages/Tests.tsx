import { Code, Container, Heading, Text, VStack } from "@chakra-ui/react";

export const Tests = () => {
  return (
    <Container p="2em">
      <Heading textAlign="center" mb="1em">
        Test environment
      </Heading>
      <VStack spacing="1em">
        <Text id="normalId">
          Text with <Code>normalId</Code>
        </Text>
        <Text id="id.with.dots">
          Text with <Code>id.with.dots</Code>
        </Text>
        <Text id="idWith[array]">
          Text with <Code>idWith[array]</Code>
        </Text>
      </VStack>
    </Container>
  );
};
