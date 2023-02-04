import { PrivateRouts } from "helpers";
import { createBrowserRouter } from "react-router-dom";

import { AsyncPic, picLoader } from "./AsyncPic";
import { Cats } from "./Cats";
import { Files } from "./Files";
import { Main } from "./Main";
import { NotFoundPage } from "./NotFoundPage";
import { RegistrationForm } from "./RegistrationForm";
import { UserProfile } from "./UserProfile";

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
        path: "pic",
        element: <AsyncPic />,
        loader: picLoader,
      },
      {
        element: <PrivateRouts />,
        children: [{ path: "profile", element: <UserProfile /> }],
      },
    ],
  },
]);
