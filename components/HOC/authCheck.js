"use client";

import { usePathname } from "next/navigation";
import jwt_decode from "jwt-decode";
import { Unauthorized } from "..";

export default function authCheck(Component) {
  return function ProtectedRoute({ ...props }) {
    const pathname = usePathname();
    let userIsAuthenticated = false;

    const localAuthTokens = JSON.parse(localStorage.getItem("authTokens"));
    const localUserData = localAuthTokens
      ? jwt_decode(localAuthTokens.access_token).sub.split("_")
      : null;

    if (!localAuthTokens) {
      return <Unauthorized />;
    }

    if (
      pathname === "/form" &&
      (localUserData[1] === "admin" || localUserData[1] === "user")
    ) {
      userIsAuthenticated = true;
    }

    if (
      pathname === "/createuser" &&
      (localUserData[1] === "admin" || localUserData[1] === "GOVTOff")
    ) {
      userIsAuthenticated = true;
    }

    if (pathname === "/viewform" && localUserData[1] === "admin") {
      userIsAuthenticated = true;
    }

    if (pathname === "/villages" && localUserData[1] === "GOVTOff") {
      userIsAuthenticated = true;
    }

    if (!userIsAuthenticated) {
      return <Unauthorized />;
    }

    return <Component {...props} />;
  };
}
