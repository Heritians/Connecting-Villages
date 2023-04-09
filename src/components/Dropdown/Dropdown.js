import React, { useContext } from "react";
import { DropdownMenuItems } from "./DropdownMenuItems";
import AuthContext from "../context/Auth";
import {
  DropdownContainer,
  DropdownItem,
  DropdownMenu,
} from "./DropdownStyles";
import { Link } from "react-router-dom";

export default function Dropdown() {
  const loginAuthUser = useContext(AuthContext);
  const UserRole = loginAuthUser.user
    ? loginAuthUser.user["sub"].split("_")[1]
    : "Not Authenticated";
  return (
    <>
      <DropdownContainer id="responsive">
        <DropdownMenu>
          {UserRole === "GOVTOff"
            ? DropdownMenuItems.GOVTOff.map((item, index) => {
                return (
                  <Link
                    to={item.path}
                    style={{ textDecoration: "none" }}
                    key={index}
                  >
                    <DropdownItem>{item.title}</DropdownItem>
                  </Link>
                );
              })
            : UserRole === "admin"
            ? DropdownMenuItems.admin.map((item, index) => {
                return (
                  <Link
                    to={item.path}
                    style={{ textDecoration: "none" }}
                    key={index}
                  >
                    <DropdownItem>{item.title}</DropdownItem>
                  </Link>
                );
              })
            : DropdownMenuItems.user.map((item, index) => {
                return (
                  <Link
                    to={item.path}
                    style={{ textDecoration: "none" }}
                    key={index}
                  >
                    <DropdownItem>{item.title}</DropdownItem>
                  </Link>
                );
              })}
        </DropdownMenu>
      </DropdownContainer>
    </>
  );
}
