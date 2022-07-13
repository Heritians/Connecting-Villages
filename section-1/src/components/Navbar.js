import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960 ){
        setButton(false);
    } else {
        setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav className = "navbar">
        <div className = "navbar-container">
            <Link to='/' className = "navbar-logo" onClick={closeMobileMenu}>
                Heritians 
            </Link>
            <div className="menu-icon" onClick ={handleClick}>
                <i className={click ? 'fa fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className = 'nav-item'>
                    <Link to='/' className = 'nav-links' onClick= {closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to='/OurTeam' className = 'nav-links' onClick= {closeMobileMenu}>
                        Our Team
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to='/AboutUs' className = 'nav-links' onClick= {closeMobileMenu}>
                        About Us
                    </Link>
                </li>
                 <li className = 'nav-item'>
                    <Link to='/ContactUs' className = 'nav-links' onClick= {closeMobileMenu}>
                        Contact Us
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to='/ContactUs' className = 'nav-links' onClick= {closeMobileMenu}>
                        Login
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to='/sign-up' className = 'nav-links-mobile' onClick= {closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul> 
            {button && <Button buttonStyle='btn--outline'>Sign Up!</Button>}
        </div>
    </nav>
    </>
  );
}

export default Navbar;