import React from "react";
import "./Instructions.css";
import { FooterContainer } from "../Home_p3/footer";
 
function Instructions() {
  return (
    <>
      <div className="fullii">
        <div className="descii">
          <h1 className="titleii">Instructions</h1>
          <p className="p0ii">Getting Started, FAQ, and more </p>
        </div>
        <div class="rowii">
          <div class="columnii">
            <h2 className="name1ii">Getting Started</h2>
            <p className="p1ii">
                <li>Step 1: <a href="/ContactUs">Contact</a> an Admin/ Owner to get registered for an account.</li>
                <li>Step 2: Using the unique credentials you receive after registration, <a href="/ContactUs">Login</a> to the website.</li>
                <li>Step 3: Access the available actions you can perform, from the Services Tab.</li>
            </p>
          </div>
          </div>
          <div className="rowii2">
          <div class="columnii2">
            <img
              src="./images/Ins2.png"
              className="img1ii"
              alt="Heading1"
            ></img>
          </div>

          <div class="columnii2">
            <img
              src="./images/Ins1.png"
              className="img2ii"
              alt="Heading2"
            ></img>
          </div>
        </div>
          
        

        <div className="backii">
          <a href="/">
            <button className="back-btnii">Back to Homepage</button>
          </a>
        </div>

        {/* footer */}
        <div className="FooterWholeii">
          <FooterContainer />
        </div>
      </div>
    </>
  );
}

export default Instructions;
