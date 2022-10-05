import { Outlet } from "react-router-dom";
import { Nav } from "../components";

export const Main = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
