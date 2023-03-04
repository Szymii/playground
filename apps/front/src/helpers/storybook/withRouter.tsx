import { RouterProvider, createMemoryRouter } from "react-router-dom";

export const withRouter = (loaderData?: unknown) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  return (Story) => {
    const router = createMemoryRouter([
      {
        path: "/",
        element: <Story />,
        loader: () => {
          return loaderData ?? {};
        },
      },
    ]);

    return <RouterProvider router={router} />;
  };
};
