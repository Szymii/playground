import { Link, Nav } from "@szymii/ui";
import { useUserDataStore } from "modules/users";
import { Outlet } from "react-router-dom";

export const Main = () => {
  const userData = useUserDataStore((state) => state.userData);

  const isNotEmptyObject = (object: object) => {
    return Object.keys(object).length !== 0;
  };

  return (
    <>
      <Nav>
        <Link to={"/files"}>Files</Link>
        <Link to={"/cats"}>Cats</Link>
        <Link to={"/form"}>Form</Link>
        <Link to={"/tabs"}>Tabs</Link>
        <Link to={"/loaders"}>Load</Link>
        <Link to={"/pic"}>Random Pic</Link>
        {isNotEmptyObject(userData) && <Link to={"/profile"}>Profile</Link>}
      </Nav>
      <Outlet />
    </>
  );
};
