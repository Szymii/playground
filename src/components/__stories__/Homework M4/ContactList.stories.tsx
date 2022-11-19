import { ChakraProvider } from "@chakra-ui/react";
import { ComponentMeta } from "@storybook/react";
import { theme } from "theme";

import { Contacts } from "./Contacts";

export default {
  title: "Concept/Contacts",
  component: Contacts,
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    ),
  ],
} as ComponentMeta<typeof Contacts>;

export const ContactsContainer = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossOrigin="anonymous"
      />
      <Contacts />
    </>
  );
};
