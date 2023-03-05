import { useContext, useState } from "react";
import AuthContext from "../context/Auth";
import { Link } from "react-router-dom";
import {
  HeaderMain,
  HeaderContainer,
  NavItem,
  NavLinks,
  NavLoginBtn,
  NavLogo,
  NavLogoSpan,
  NavLogoSpan2,
  NavMenu,
  NavRow,
  LogoContainer,
  NavContainer,
  NavLogoImg,
} from "./HeaderStyles";
import logo from "../../assets/images/logo_sm.png";
import Dropdown from "../Dropdown/Dropdown";

export default function Header() {
  const loginAuthUser = useContext(AuthContext);
  const [dropdown, setDropdown] = useState(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <HeaderMain>
        <HeaderContainer>
          <div className="row navbar-fixed-top">
            <div className="container">
              <NavRow>
                <LogoContainer>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <NavLogo>
                      <NavLogoSpan>Heri</NavLogoSpan>
                      <NavLogoSpan2>tians</NavLogoSpan2>
                      <NavLogoImg src={logo} alt="Heritians" />
                    </NavLogo>
                  </Link>
                </LogoContainer>

                <NavContainer className="row">
                  <NavMenu>
                    <NavItem>
                      <Link to="/" style={{ textDecoration: "none" }}>
                        <NavLinks>Home</NavLinks>
                      </Link>
                      <Link to="/about" style={{ textDecoration: "none" }}>
                        <NavLinks>About</NavLinks>
                      </Link>
                      <Link to="/team" style={{ textDecoration: "none" }}>
                        <NavLinks>Team</NavLinks>
                      </Link>
                      <Link to="/contact" style={{ textDecoration: "none" }}>
                        <NavLinks>Contact Us</NavLinks>
                      </Link>

                      {localStorage.getItem("authTokens") ? (
                        <>
                          <NavLinks
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                          >
                            Services <i className="bi bi-caret-down-fill"></i>
                            {dropdown && <Dropdown />}
                          </NavLinks>
                          <NavLoginBtn onClick={loginAuthUser.logoutUser}>
                            Logout
                          </NavLoginBtn>
                        </>
                      ) : (
                        <Link to="/login">
                          <NavLoginBtn>Login</NavLoginBtn>
                        </Link>
                      )}
                    </NavItem>
                  </NavMenu>
                </NavContainer>
              </NavRow>
            </div>
          </div>
        </HeaderContainer>
      </HeaderMain>
    </>
  );
}
