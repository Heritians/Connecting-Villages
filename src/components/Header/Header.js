import { useContext, useState, useEffect, useRef } from "react";
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
  NavHamburgerBtn,
} from "./HeaderStyles";
import logo from "../../assets/images/logo_sm.png";
import Dropdown from "../Dropdown/Dropdown";
import "./Header.css";

function Header() {
  const loginAuthUser = useContext(AuthContext);
  const [dropdown, setDropdown] = useState(false);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsNavOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onMouseEnter = () => {
    if (window.innerWidth < 0) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 0) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <HeaderMain>
        <HeaderContainer>
          <nav
            className="navbar navbar-expand-lg navbar-light bg-white container-fluid fixed-top"
            ref={navbarRef}
          >
            <LogoContainer>
              <Link to="/" style={{ textDecoration: "none" }}>
                <NavLogo>
                  <NavLogoSpan>Heri</NavLogoSpan>
                  <NavLogoSpan2>tians</NavLogoSpan2>
                  <NavLogoImg src={logo} alt="Heritians" />
                </NavLogo>
              </Link>
            </LogoContainer>
            <NavHamburgerBtn
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleNav}
            >
              {isNavOpen ? (
                <i className="bi bi-x-lg"></i>
              ) : (
                <i className="bi bi-list"></i>
              )}
            </NavHamburgerBtn>

            <div
              id="navbarNavAltMarkup"
              className={`collapse navbar-collapse navbar-nav-collapse ${
                isNavOpen ? "show" : ""
              }`}
            >
              <div className="navbar-nav flex-column text-center">
                <NavRow>
                  <NavContainer className="row flex-column">
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
          </nav>
        </HeaderContainer>
      </HeaderMain>
    </>
  );
}

export default Header;
