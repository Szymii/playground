import { Meta, StoryObj } from "@storybook/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

import { AsyncPic, picLoader } from "./AsyncPic";

export default {
  title: "Pages/AsyncPic",
  component: AsyncPic,
} as Meta<typeof AsyncPic>;

const router = createMemoryRouter([
  {
    path: "/",
    element: <AsyncPic />,
    loader: picLoader,
  },
]);

export const Default: StoryObj<typeof AsyncPic> = {
  render: () => <RouterProvider router={router} />,
};
