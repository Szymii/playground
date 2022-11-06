import { ChakraProvider } from "@chakra-ui/react";
import { ComponentMeta } from "@storybook/react";
import { theme } from "theme";
import { ToastExample } from "./ToastExample";
import { css, Global } from "@emotion/react";
import { createMemoryRouter, Link, RouterProvider } from "react-router-dom";

export default {
  title: "Concept/Toast",
  component: ToastExample,
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <Global
          styles={css`
            .chakra-alert__title,
            .chakra-alert__desc {
              font-family: "Georgia, serif";
            }
          `}
        />
        <Story />
      </ChakraProvider>
    ),
  ],
} as ComponentMeta<typeof ToastExample>;

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

export const Default = () => {
  return <RouterProvider router={router} />;
};
