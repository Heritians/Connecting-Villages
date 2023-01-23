import React, { useState, useEffect, useRef , useContext} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Popup from "./Login/Popup";
import { Button } from "./Login/Button";
import  LogOutButton  from "./Login/LogOutButton";

import AuthContext,{AuthProvider} from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ScopesDropdown } from "./Dropdown/ScopesDropdown";




function Navbar() {
  const loginAuthUser = useContext(AuthContext);
  const [buttonPopup, setButtonPopup] = useState(false);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);


  const UserRole=loginAuthUser.user?loginAuthUser.user["sub"].split('_')[1]:"Not Authenticated"

  const visDropdown=loginAuthUser.user?true:false;

  const [isDropdown, setDropdown] = useState(false);


  const [isDisabled, setIsDisabled] = useState(false);
  const history = useNavigate();

 
  
  
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  

  useEffect(() => {
    showButton();
  }, []);

  const handleSinginButtonClick=()=>history("/signin");

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Heri
            <p className="navbar-logo2">tians</p>
            <p className="navbar-logoicon">
              {" "}
              <i className="fa-solid fa-hand-holding-hand"></i>{" "}
            </p>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fa-solid fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Our Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            {localStorage.getItem("authTokens") ? (
              <li
                className="nav-item"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Services <i className="fas fa-caret-down" />
                </Link>
                {isDropdown && (
                  <div>
                    <ScopesDropdown role={UserRole} />
                  </div>
                )}
              </li>
            ) : null}
          </ul>

          <div className="auth">
            {localStorage.getItem("authTokens") ? (
              <LogOutButton></LogOutButton>
            ) : (
              <Button
                buttonStyle="btn--outline"
                button
                onClick={handleSinginButtonClick}
              >
                SIGN IN
              </Button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
