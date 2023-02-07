import { Meta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
        <Story />
      </QueryClientProvider>
    ),
  ],
} as Meta<typeof Cats>;

const Template = () => <Cats />;

export const Default = Template.bind({});
