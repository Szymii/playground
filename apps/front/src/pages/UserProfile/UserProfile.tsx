import { Container, HStack, Heading, Input, VStack } from "@chakra-ui/react";
import { Field } from "components/ui/field";
import { Radio, RadioGroup } from "components/ui/radio";
import { useUserDataStore } from "modules/users";

export const UserProfile = () => {
  const userData = useUserDataStore((state) => state.userData);

  return (
    <Container p="2em">
      <Heading textAlign="center" mb="1em" data-testid={"user-greeting"}>
        Hi {userData.firstName}
      </Heading>
      <VStack gap="1em">
        <Field label="Email address">
          <Input type="text" value={userData.emailAddress} disabled />
        </Field>
        <Field label="Workplace">
          <Input type="text" value={userData.workplace} disabled />
        </Field>
        <Field label="Gender">
          <RadioGroup defaultValue="Man" value={userData.gender}>
            <HStack gap="24px">
              <Radio value="female" disabled>
                Woman
              </Radio>
              <Radio value="male" disabled>
                Men
              </Radio>
            </HStack>
          </RadioGroup>
        </Field>
      </VStack>
    </Container>
  );
};
