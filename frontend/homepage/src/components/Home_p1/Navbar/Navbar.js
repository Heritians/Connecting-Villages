import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Popup from "./Login/Popup";
import { Button } from "./Login/Button";
import OwnerDropdown from "./Dropdown/OwnerDropdown";
import UserDropdown from "./Dropdown/UserDropdown";
import AdminDropdown from "./Dropdown/AdminDropdown";
import  LogOutButton  from "./Login/LogOutButton";




function Navbar() {
  const [buttonPopup, setButtonPopup] = useState(false);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const [isOwner,setOwner] = useState(true)
  const [isUser,setUser] = useState(false)
  const [isAdmin,setAdmin] = useState(false)
  const [isDropdown, setDropdown] = useState(false)

  const [isLoggedIn, setisLoggedIn ] = useState(false)
  
  const [isDisabled, setIsDisabled] = useState(false);

  const IsOwner = (event) => {
    if(event.target.value === "GOVTOff")
    {
      setIsDisabled(true);

    }
    else{
      setIsDisabled(false);
    }
  }
 
  
  
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
            {isLoggedIn?
            <li className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
          <Link
            to="/services"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Services <i className= 'fas fa-caret-down'/>
          </Link>
          {isDropdown&& <div>
          {isOwner&& <div className = "owner-dropdown">
          <OwnerDropdown />
         </div>}
         {isUser&& <div className = "user-dropdown">
          <UserDropdown/>
         </div>}
         {isAdmin&& <div className = "admin-dropdown">
          <AdminDropdown/>
         </div>}
         </div>}


          
        </li> : null
            }
            
            
          </ul>


           <div className="auth">
            {isLoggedIn? 
            
            <LogOutButton>
            </LogOutButton> 
            :
            <Button
              buttonStyle="btn--outline"
              button
              onClick={() => setButtonPopup(true)}
            >
              SIGN IN
            </Button>}
            </div>
        
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <form>
    <label>
    Adhaar No.:
    <input type="text" name="name" />
    </label>
    <br/>
    <label>
    Password:
    <input type="password" name="name" />
    </label>
    <br/>
    <label>
    Role:
    <select onChange={IsOwner} required>
            <option> </option>
            <option value="GOVTOff">Owner</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
    </label>
    <br/>

    <label>
    Village Name:
    <select disabled = {isDisabled}>
            <option value="Lasudiya Khas">Lasudiya Khas</option>
            <option value="Gawa Kheda">Gawa Kheda</option>
            <option value="Mana Khedi">Mana Khedi</option>
            <option value="Nipaniya Kalan">Nipaniya Kalan</option>
            <option value="Beda Khedi">Beda Khedi</option>
            <option value="None" selected disabled hidden>None</option>
          </select>
          
    </label>
    <br/>
    <label>
    <input type = "checkbox"/>
    I have read
    <a href={"https://vtop.vitbhopal.ac.in/vtop/initialProcess"}>the agreement</a>
    </label>
    <br/>

    
  <input type="submit" value="Submit" />
  </form>
          </Popup>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
