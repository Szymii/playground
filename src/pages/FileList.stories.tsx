import { ChakraProvider } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "../theme";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

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

const Template: ComponentStory<typeof FakeList> = () => <FakeList />;
export const Default = Template.bind({});

export const Interactive = Template.bind({});
Interactive.play = async ({ canvasElement }) => {
  const { getByText, getAllByLabelText } = within(canvasElement);

  await waitFor(() =>
    expect(getByText("Test_file_one.pdf")).toBeInTheDocument()
  );

  const menuButton = await getAllByLabelText("Options")[0];
  userEvent.click(menuButton);

  expect(getByText("Download file")).toBeInTheDocument();
};
