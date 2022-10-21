import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRouts } from "./helpers";
import { Main, UserProfile, Cats, Tests, RegistrationForm } from "./pages";
import { FakeList } from "./pages/FakeList";
import { theme } from "./theme";

if (process.env.NODE_ENV === "development") {
  import("./mocks/browser").then(({ worker }) => {
    worker.start({
      onUnhandledRequest: "bypass",
    });
  });
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="form" element={<RegistrationForm />} />
              <Route path="cats" element={<Cats />} />
              <Route path="files" element={<FakeList />} />
              <Route path="tests" element={<Tests />} />
              <Route element={<PrivateRouts />}>
                <Route path="profile" element={<UserProfile />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
