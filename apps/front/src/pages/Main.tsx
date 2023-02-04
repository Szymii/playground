import { Nav } from "components";
import { Outlet } from "react-router-dom";

export const Main = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
