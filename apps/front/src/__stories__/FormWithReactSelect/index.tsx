import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

interface IFormFields {
  names: string[];
  email: string[];
  content: string;
}

export const FormWithReactSelect = () => {
  const { handleSubmit, register, control } = useForm<IFormFields>();

  const options = [
    { value: "asd123", label: "stefan" },
    { value: "sdf234", label: "zbigniew" },
  ];

  return (
    <Container>
      <Heading textAlign="center" mb="1em">
        Message Form
      </Heading>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Controller
            control={control}
            name="names"
            rules={{
              required: {
                message: "Required!!!",
                value: true,
              },
            }}
            render={({ field: { name, onChange } }) => (
              <CreatableSelect
                name={name}
                isMulti
                options={options}
                onChange={(value) => {
                  onChange(value.map(({ value }) => value));
                }}
              />
            )}
          />
        </FormControl>
        <FormControl isRequired mt={6}>
          <FormLabel>Content</FormLabel>
          <Textarea {...register("content")} />
        </FormControl>
        <Box w="100%">
          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
};
