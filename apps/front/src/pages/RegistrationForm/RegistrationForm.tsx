import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Select,
  Switch,
  VStack,
} from "@chakra-ui/react";
import { ErrorBoundary } from "@szymii/ui";
import { IRegistrationForm, useUserDataStore } from "modules/users";
import { useForm } from "react-hook-form";

const RegistrationFormThrowable = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationForm>({
    defaultValues: {
      emailAlerts: null,
    },
  });
  const setUserData = useUserDataStore((state) => state.setUserData);

  const onSubmit = (data: IRegistrationForm) => {
    setUserData(data);
  };

  return (
    <>
      <Heading textAlign="center" mb="1em">
        Registration Form
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing="24px">
          <FormControl isInvalid={!!errors?.emailAddress}>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              {...register("emailAddress", { required: true })}
            />
            {errors.emailAddress && (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input type="text" {...register("firstName")} />
          </FormControl>
          <FormControl isInvalid={!!errors?.password}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              {...register("password", {
                required: true,
                pattern: /^[a-zA-z0-9]{3,}$/,
              })}
            />
            {errors.password && (
              <FormErrorMessage>Invalid password.</FormErrorMessage>
            )}
          </FormControl>
          <FormControl as="fieldset">
            <RadioGroup defaultValue="Man">
              <HStack spacing="24px">
                <Radio value="female" {...register("gender")}>
                  Woman
                </Radio>
                <Radio value="male" {...register("gender")}>
                  Man
                </Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <Select
            placeholder="Workplace"
            {...register("workplace")}
            name="workplace"
            aria-label="workplace-select"
          >
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
          </Select>
          <Box w="100%">
            <Checkbox {...register("policy", { required: true })} isRequired>
              Accepting privacy policy and terms of use
            </Checkbox>
          </Box>
          <Box w="100%">
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="email-alerts" mb="0">
                Enable email alerts?
              </FormLabel>
              <Switch
                {...register("emailAlerts")}
                id="email-alerts"
                defaultChecked
              />
            </FormControl>
          </Box>
          <Box w="100%">
            <Button mt={4} colorScheme="teal" type="submit">
              Submit
            </Button>
          </Box>
        </VStack>
      </form>
    </>
  );
};

export const RegistrationForm = () => (
  <Container w={[300, 400, 700]} pt="3em">
    <ErrorBoundary message="it's dead">
      <RegistrationFormThrowable />
    </ErrorBoundary>
  </Container>
);
