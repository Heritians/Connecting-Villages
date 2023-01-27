import React, { useState, useEffect, useRef , useContext} from "react";
import { useNavigate } from "react-router-dom";


import './ContactUs.css';


function ContactUs(props) {


  return (
    <div className="ContactUs">
      <div className="ContactUs-inner">
      <a href="/">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          Close
        </button>
        </a>
        <h1>Contact Us</h1>
        <p>For any queries, please contact us at:</p>
        <ul>
            <li>Phone: 076978 67027</li>
            <li>Email: uba@vitbhopal.ac.in</li>
            <li>Address: <br/>
                        <p>VIT Bhopal University,</p>
                         <p>Kothri Kalan, Sehore</p>
                         <p>Madhya Pradesh - 466 114.</p></li>
        </ul>
      </div>
    </div>
  );
}

export default ContactUs;
