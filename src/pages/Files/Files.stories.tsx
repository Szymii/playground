import { ChakraProvider } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Files } from "./Files";
import { theme } from "theme";
import { files } from "mocks/handlers";
import { mswMock } from "mocks/mswMock";

mswMock(files);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

export default {
  title: "Pages/Files",
  component: Files,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Story />
        </ChakraProvider>
      </QueryClientProvider>
    ),
  ],
} as ComponentMeta<typeof Files>;

const Template: ComponentStory<typeof Files> = () => <Files />;
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
