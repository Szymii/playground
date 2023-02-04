import { Navigate, Outlet } from "react-router-dom";

export const PrivateRouts = () => {
  const auth = { token: true };

  return auth.token ? <Outlet /> : <Navigate to="/form" />;
};
