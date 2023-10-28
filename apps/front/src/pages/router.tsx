import { QueryClient } from "@tanstack/react-query";
import { PrivateRouts } from "helpers";
import { createBrowserRouter } from "react-router-dom";

import { AsyncPic, picLoader } from "./AsyncPic";
import { Cats } from "./Cats";
import { InjectedCats } from "./Cats/InjectedCats";
import { LoadedCats } from "./Cats/LoadedCats";
import { Files } from "./Files";
import { Loaders, imagesLoader } from "./Loaders";
import { Main } from "./Main";
import { NotFoundPage } from "./NotFoundPage";
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
        path: "loaders",
        element: <Loaders />,
        loader: imagesLoader(queryClient),
        children: [
          {
            path: ":category",
            element: <LoadedCats />,
            loader: async ({ params }) => {
              const query = imagesLoader(queryClient, params.category);

              return await query();
            },
          },
          {
            path: "more/:category",
            element: <InjectedCats />,
          },
        ],
      },
      {
        element: <PrivateRouts />,
        children: [{ path: "profile", element: <UserProfile /> }],
      },
    ],
  },
]);
