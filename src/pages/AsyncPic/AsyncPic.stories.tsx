import { ChakraProvider } from "@chakra-ui/react";
import { Meta } from "@storybook/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { theme } from "theme";

import { AsyncPic, picLoader } from "./AsyncPic";

export default {
  title: "Pages/AsyncPic",
  component: AsyncPic,
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    ),
  ],
} as Meta<typeof AsyncPic>;

const router = createMemoryRouter([
  {
    path: "/",
    element: <AsyncPic />,
    loader: picLoader,
  },
]);

const Template = () => <RouterProvider router={router} />;

export const Default = Template.bind({});
