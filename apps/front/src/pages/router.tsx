import { QueryClient } from "@tanstack/react-query";
import { DeepsProvider, PrivateRouts } from "helpers";
import { ProductsServicesFactory } from "modules/products";
import { createBrowserRouter } from "react-router-dom";

import { AsyncPic, picLoader } from "./AsyncPic";
import { Cats } from "./Cats";
import { Files } from "./Files";
import { Main } from "./Main";
import { NotFoundPage } from "./NotFoundPage";
import { Products } from "./Products";
import { RegistrationForm } from "./RegistrationForm";
import { Opiw, Swz, Tabs } from "./Tabs";
import { UserProfile } from "./UserProfile";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      staleTime: 1000 * 10,
    },
  },
});

const productsServicesFactory = new ProductsServicesFactory();

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "form",
        element: <RegistrationForm />,
      },
      {
        path: "cats",
        element: <Cats />,
      },
      {
        path: "files",
        element: <Files />,
      },
      {
        path: "tabs",
        element: <Tabs />,
        children: [
          {
            path: "swz",
            element: <Swz />,
          },
          {
            path: "opiw",
            element: <Opiw />,
          },
        ],
      },
      {
        path: "pic",
        element: <AsyncPic />,
        loader: picLoader(queryClient),
      },
      {
        path: "products",
        element: (
          <DeepsProvider productsServicesFactory={productsServicesFactory}>
            <Products />
          </DeepsProvider>
        ),
      },
      {
        element: <PrivateRouts />,
        children: [{ path: "profile", element: <UserProfile /> }],
      },
    ],
  },
]);
