import React, { useState, useEffect, useRef , useContext} from "react";
import { useNavigate } from "react-router-dom";


import './ServicesSmall.css';


function ServicesSmall(props) {


  return (
    <div className="ServicesSmall">
      <div className="ServicesSmall-inner">
      <a href="/">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          Close
        </button>
        </a>
        <h1> Services</h1>
        <p>For your role, you can access the following</p>
        <ul>
            <li><a href="/CreateAccount">Create Account</a></li>
            <li><a href="/fillTheform">Fill The Form</a></li>
            <li><a href="/ViewAnalytics">View Analytics</a></li>
        </ul>
      </div>
    </div>
  );
}

export default ServicesSmall;
