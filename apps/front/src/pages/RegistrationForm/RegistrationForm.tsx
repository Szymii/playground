import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Input,
  VStack,
  createListCollection,
} from "@chakra-ui/react";
import { ErrorBoundary } from "@szymii/ui";
import { Checkbox } from "components/ui/checkbox";
import { Field } from "components/ui/field";
import { Radio, RadioGroup } from "components/ui/radio";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
} from "components/ui/select";
import { Switch } from "components/ui/switch";
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

  const frameworks = createListCollection({
    items: [
      { label: "frontend", value: "frontend" },
      { label: "backend", value: "backend" },
      { label: "fullstack", value: "fullstack" },
    ],
  });

  return (
    <>
      <Heading textAlign="center" mb="1em">
        Registration Form
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack gap="24px">
          <Field
            invalid={!!errors?.emailAddress}
            label="Email address"
            errorText="Email is required."
          >
            <Input
              type="email"
              {...register("emailAddress", { required: true })}
            />
          </Field>
          <Field label="First Name">
            <Input type="text" {...register("firstName")} />
          </Field>
          <Field
            invalid={!!errors?.password}
            label="Password"
            errorText="Invalid password."
          >
            <Input
              type="password"
              {...register("password", {
                required: true,
                pattern: /^[a-zA-z0-9]{3,}$/,
              })}
            />
          </Field>
          <Field as="fieldset">
            <RadioGroup defaultValue="Man">
              <HStack gap="24px">
                <Radio value="female" {...register("gender")}>
                  Woman
                </Radio>
                <Radio value="male" {...register("gender")}>
                  Man
                </Radio>
              </HStack>
            </RadioGroup>
          </Field>
          <SelectRoot
            collection={frameworks}
            {...register("workplace")}
            name="workplace"
          >
            <SelectTrigger aria-label="workplace-select" />
            <SelectContent>
              <SelectItem item="frontend">Frontend</SelectItem>
              <SelectItem item="backend">Backend</SelectItem>
              <SelectItem item="fullstack">Fullstack</SelectItem>
            </SelectContent>
          </SelectRoot>
          <Box w="100%">
            <Checkbox {...register("policy", { required: true })} required>
              Accepting privacy policy and terms of use
            </Checkbox>
          </Box>
          <Box w="100%">
            <Field
              display="flex"
              alignItems="center"
              label="Enable email alerts?"
            >
              <Switch
                {...register("emailAlerts")}
                id="email-alerts"
                defaultChecked
              />
            </Field>
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
