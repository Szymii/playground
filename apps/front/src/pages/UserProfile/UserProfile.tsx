import {
  Container,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";
import { useUserDataStore } from "modules/users";

export const UserProfile = () => {
  const userData = useUserDataStore((state) => state.userData);

  return (
    <Container p="2em">
      <Heading textAlign="center" mb="1em" data-testid={"user-greeting"}>
        Hi {userData.firstName}
      </Heading>
      <VStack spacing="1em">
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="text" value={userData.emailAddress} disabled />
        </FormControl>
        <FormControl>
          <FormLabel>Workplace</FormLabel>
          <Input type="text" value={userData.workplace} disabled />
        </FormControl>
        <FormControl>
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
        </FormControl>
      </VStack>
    </Container>
  );
};
