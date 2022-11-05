import {
  Button,
  Container,
  Heading,
  SimpleGrid,
  useToast,
  UseToastOptions,
} from "@chakra-ui/react";
import { useCToast } from "./useCToast";

const defaultOptions: UseToastOptions = {
  title: "Toast Example",
  position: "bottom-right",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, tenetur!",
  duration: null,
  containerStyle: {
    maxWidth: "300px",
  },
  isClosable: true,
};

export const ToastExample = () => {
  const toast = useCToast({
    ...defaultOptions,
    status: "warning",
    variant: "subtle",
  });

  const handleSuccess = () =>
    toast({
      ...defaultOptions,
      status: "success",
    });

  const handleWarning = () => toast();

  const handleError = () =>
    toast({
      ...defaultOptions,
      status: "error",
    });

  return (
    <Container p="2em">
      <Heading textAlign="center" mb="1em">
        Show Toast
      </Heading>
      <SimpleGrid columns={3} spacing={10}>
        <Button colorScheme="green" variant="outline" onClick={handleSuccess}>
          Success
        </Button>
        <Button colorScheme="orange" variant="outline" onClick={handleWarning}>
          Warning
        </Button>
        <Button colorScheme="red" variant="outline" onClick={handleError}>
          Error
        </Button>
      </SimpleGrid>
    </Container>
  );
};
