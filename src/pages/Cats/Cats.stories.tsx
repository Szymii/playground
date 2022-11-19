import { ChakraProvider } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "theme";

import { Cats } from "./Cats";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

export default {
  title: "Pages/Cats",
  component: Cats,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Story />
        </ChakraProvider>
      </QueryClientProvider>
    ),
  ],
} as ComponentMeta<typeof Cats>;

const Template: ComponentStory<typeof Cats> = () => <Cats />;
export const Default = Template.bind({});
