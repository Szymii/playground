import { Global, css } from "@emotion/react";
import { Meta, StoryObj } from "@storybook/react";
import { Link, RouterProvider, createMemoryRouter } from "react-router-dom";

import { ToastExample } from "./ToastExample";

export default {
  component: ToastExample,
  parameters: {
    a11y: { disable: true },
  },
  decorators: [
    (Story) => (
      <>
        <Global
          styles={css`
            .chakra-alert__title,
            .chakra-alert__desc {
              font-family: "Georgia, serif";
            }
          `}
        />
        <Story />
      </>
    ),
  ],
} as Meta;

const router = createMemoryRouter([
  {
    path: "/",
    element: <ToastExample />,
  },
  {
    path: "/profile",
    element: (
      <>
        <Link to="/">Go back</Link>
      </>
    ),
  },
]);

export const Default: StoryObj<typeof ToastExample> = {
  render: () => <RouterProvider router={router} />,
};
