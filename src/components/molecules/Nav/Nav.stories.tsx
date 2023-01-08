import { ChakraProvider } from "@chakra-ui/react";
import { Meta, StoryFn } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from "theme";

import { Nav } from ".";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

export default {
  title: "Molecules/Nav",
  component: Nav,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<Story />} />
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </QueryClientProvider>
    ),
  ],
} as Meta;

const Template: StoryFn = () => <Nav />;

export const Default = Template.bind({});
