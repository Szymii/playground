import { Nav } from "src/components";
import { Outlet } from "react-router-dom";

export const Main = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
