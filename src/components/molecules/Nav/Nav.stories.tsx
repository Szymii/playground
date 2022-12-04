import { ChakraProvider } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
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
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = () => <Nav />;

export const Default = Template.bind({});
