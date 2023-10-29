/**
 * @vitest-environment jsdom
 */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { DeepsProvider } from "helpers";
import { Suspense } from "react";
import { expect, it } from "vitest";

import { Products } from "./Products";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      retry: false,
      staleTime: 1000 * 100,
    },
  },
});

const productsServicesFactory = {
  getAllProducts() {
    return {
      queryKey: ["products", ""],
      queryFn: async () => [],
    };
  },
};

it("should render files list", async () => {
  render(
    <Suspense fallback={<>Loading...</>}>
      <DeepsProvider productsServicesFactory={productsServicesFactory as never}>
        <QueryClientProvider client={queryClient}>
          <Products />
        </QueryClientProvider>
      </DeepsProvider>
    </Suspense>,
  );

  expect(await screen.findByTestId("heading")).toBeDefined();
});
