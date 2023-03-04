import { Meta, StoryObj } from "@storybook/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

import { AsyncPic } from "./AsyncPic";

export default {
  component: AsyncPic,
} as Meta;

const router = createMemoryRouter([
  {
    path: "/",
    element: <AsyncPic />,
    loader: () => {
      return new Promise((res) => {
        res({ download_url: `https://picsum.photos/id/2/5000/3333` });
      });
    },
  },
]);

export const Default: StoryObj<typeof AsyncPic> = {
  render: () => <RouterProvider router={router} />,
};
