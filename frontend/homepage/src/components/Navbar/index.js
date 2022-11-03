import React from "react";

import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/">Heritians</NavLogo>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeStyle={{ color: "black" }}>
            Home
          </NavLink>
          <NavLink to="/ourTeam" activeStyle={{ color: "black" }}>
            Our Team
          </NavLink>
          <NavLink to="/contact" activeStyle={{ color: "black" }}>
          Contact Us
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/sign-up">Login/ Register</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
      <hr
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'black',
          height: '1px',
          width : '1200px',
        }}
      />
    </>
  );
};
export default Navbar;
