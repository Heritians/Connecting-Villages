"use client";

import { usePathname } from "next/navigation";
import { Unauthorized } from "..";
import { useContext } from "react";
import AuthContext from "@/Utils/Auth";

export default function authCheck(Component) {
  return function ProtectedRoute({ ...props }) {
    const { authData } = useContext(AuthContext);
    const pathname = usePathname();
    let userIsAuthenticated = false;

    if (!authData) {
      return <Unauthorized />;
    }

    if (
      pathname === "/form" &&
      (authData.role === "admin" || authData.role === "user")
    ) {
      userIsAuthenticated = true;
    }

    if (
      pathname === "/createuser" &&
      (authData.role === "admin" || authData.role === "GOVTOff")
    ) {
      userIsAuthenticated = true;
    }

    if (pathname === "/viewform" && authData.role === "admin") {
      userIsAuthenticated = true;
    }

    if (pathname === "/villages" && authData.role === "GOVTOff") {
      userIsAuthenticated = true;
    }

    if (!userIsAuthenticated) {
      return <Unauthorized />;
    }

    return <Component {...props} />;
  };
}
