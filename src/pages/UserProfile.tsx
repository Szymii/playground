import {
  Box,
  Container,
  FormLabel,
  Heading,
  HStack,
  Input,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";
import { useUserDataStore } from "src/modules/users";

export const UserProfile = () => {
  const userData = useUserDataStore((state) => state.userData);

  return (
    <Container p="2em">
      <Heading textAlign="center" mb="1em">
        Hi {userData.firstName}
      </Heading>
      <VStack spacing="1em">
        <Box w="100%">
          <FormLabel>Email address</FormLabel>
          <Input type="text" value={userData.emailAddress} disabled />
        </Box>
        <Box w="100%">
          <FormLabel>Workplace</FormLabel>
          <Input type="text" value={userData.workplace} disabled />
        </Box>
        <Box w="100%">
          <FormLabel>Gender</FormLabel>
          <RadioGroup defaultValue="Man" value={userData.gender}>
            <HStack spacing="24px">
              <Radio value="female" disabled>
                Woman
              </Radio>
              <Radio value="male" disabled>
                Men
              </Radio>
            </HStack>
          </RadioGroup>
        </Box>
      </VStack>
    </Container>
  );
};
