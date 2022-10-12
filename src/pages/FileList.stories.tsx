import { ChakraProvider } from "@chakra-ui/react";
import { ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { rest } from "msw";
import { worker } from "../mocks/browser";
import { theme } from "../theme";
import filesData from "../mocks/mockData/files.json";

import { FakeList } from "./FakeList";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

export default {
  title: "Pages/FakeList",
  component: FakeList,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Story />
        </ChakraProvider>
      </QueryClientProvider>
    ),
  ],
} as ComponentMeta<typeof FakeList>;

export const Default = <FakeList />;
