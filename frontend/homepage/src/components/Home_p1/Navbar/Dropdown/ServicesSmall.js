import React, { useState, useEffect, useRef , useContext} from "react";
import { FooterContainer } from "../../../Home_p3/footer";


import './ServicesSmall.css';



function ServicesSmall(props) {

  const [isOwner,setOwner] = useState(false)
  const [isUser,setUser] = useState(false)
  const [isAdmin,setAdmin] = useState(true)

  return (
    <>
    <div className="ServicesSmall">
      <div className="ServicesSmall-inner">
        <h1 className="head_s"> Services</h1>
        <p className="text">For your role, you can access the following:</p>
        <div className="row1">
        {isOwner&& <ul className="column1">
            <li><a href="/CreateAccount">Create Account</a></li>
            <li><a href="/fillTheform">Fill The Form</a></li>
            <li><a href="/ViewAnalytics">View Analytics</a></li>
        </ul>}
        {isAdmin&& <ul className="column1">
            <li><a href="/CreateAccount">Create Account</a></li>
            <li><a href="/fillTheform">Fill The Form</a></li>
            <li><a href="/ViewAnalytics">View Analytics</a></li>
        </ul>}
        {isUser&& <ul className="column1">
            <li><a href="/fillTheform">Fill The Form</a></li>
        </ul>}
        <div class="column1">
            <img
              src="./images/Services1.jpeg"
              className="img1"
              alt="Heading1"
            ></img>
          </div>
        </div>
      </div>
    </div>
    <div className="back">
    <a href="/">
      <button className="back-btn">Back to Homepage</button>
    </a>
  </div>

  
  <div className="FooterWhole">
    <FooterContainer />
  </div>

  </>

  );
}

export default ServicesSmall;
