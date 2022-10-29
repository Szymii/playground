import { PrivateRouts } from "helpers";
import { createBrowserRouter } from "react-router-dom";
import { Cats } from "./Cats";
import { FakeList } from "./FakeList";
import { Main } from "./Main";
import { NotFoundPage } from "./NotFoundPage";
import { Pokemons } from "./Pokemons";
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
        element: <FakeList />,
      },
      {
        path: "async",
        element: <Pokemons />,
        // loader:
      },
      {
        element: <PrivateRouts />,
        children: [{ path: "profile", element: <UserProfile /> }],
      },
    ],
  },
]);
