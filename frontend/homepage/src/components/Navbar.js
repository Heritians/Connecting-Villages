import React, { useState, useEffect } from "react";
import { BigB } from "./BigB";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Popup from "./Popup";
import Sign from './Navbar/Sign';
import "./Navbar/Sign.css";

function Navbar() {
  const [buttonPopup, setButtonPopup] = useState(false);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

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
              <i class="fa-solid fa-hand-holding-hand"></i>{" "}
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

            <li>
              <Link
                to="/"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && (
            <BigB
              buttonStyle="btn--outline"
              button
              onClick={() => setButtonPopup(true)}
            >
              SIGN UP
            </BigB>
          )}
          <Sign/>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3>my Popup</h3>
          </Popup>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
