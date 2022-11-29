import { ChakraProvider } from "@chakra-ui/react";
import { expect } from "@storybook/jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { files } from "mocks/handlers";
import { mswMock } from "mocks/mswMock";
import { theme } from "theme";

import { Files } from "./Files";

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
  const { getByText, findByText, getAllByLabelText } = within(canvasElement);

  expect(await findByText("Test_file_one.pdf")).toBeInTheDocument();

  const menuButton = await getAllByLabelText("Options")[0];
  userEvent.click(menuButton);

  expect(getByText("Download file")).toBeInTheDocument();
};
