import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./Auth";

import React from "react";
import UnauthorizedPage from "../../pages/Unauthorized/UnauthorizedPage";

const RouteAuth = ({ allowedRoles }) => {
  const loginUserAuth = useContext(AuthContext);
  const location = useLocation();

  return allowedRoles.find((role) =>
    loginUserAuth?.user["sub"].split("_")[1].includes(role)
  ) ? (
    <Outlet />
  ) : loginUserAuth.user["sub"].split("_")[1] ? (
    <UnauthorizedPage />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RouteAuth;
