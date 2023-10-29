import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      retry: false,
      staleTime: 1000 * 100,
    },
  },
});

const query = (data: unknown) => ({
  queryKey: ["pic"],
  queryFn: async () => {
    return data ?? {};
  },
});

const loader = (queryClient: QueryClient, data: unknown) => async () => {
  const q = query(data);
  return (
    queryClient.getQueryData(q.queryKey) ?? (await queryClient.fetchQuery(q))
  );
};

export const withRouter = <T,>(loaderData?: T) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  return (Story) => {
    const router = createMemoryRouter([
      {
        path: "/",
        element: <Story />,
        loader: loader(queryClient, loaderData ?? {}),
      },
    ]);

    return (
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-right"
        />
      </QueryClientProvider>
    );
  };
};
