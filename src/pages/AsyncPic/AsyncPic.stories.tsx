import { ChakraProvider } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
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
} as ComponentMeta<typeof AsyncPic>;

const router = createMemoryRouter([
  {
    path: "/",
    element: <AsyncPic />,
    loader: picLoader,
  },
]);

const Template: ComponentStory<typeof AsyncPic> = () => (
  <RouterProvider router={router} />
);
export const Default = Template.bind({});
