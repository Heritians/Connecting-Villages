import React from "react";
import "./AboutUs.css";
import { FooterContainer } from "../../../Home_p3/footer";
 
function AboutUs() {
  return (
    <>
      <div className="full">
        <div className="desc">
          <h1 className="title">About Us</h1>
          <p className="p0">Our Motto: </p>
        </div>
        <div class="row">
          <div class="column">
            <h2 className="name1">Heading 1</h2>
            <p className="p1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div class="column">
            <img
              src="./images/AboutUs.png"
              className="img1"
              alt="Heading1"
            ></img>
          </div>

          <div class="column">
            <img
              src="./images/AboutUs2.png"
              className="img2"
              alt="Heading2"
            ></img>
          </div>

          <div class="column">
            <h2 className="name1">Heading 2</h2>
            <p className="p2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className="back">
          <a href="/">
            <button className="back-btn">Back to Homepage</button>
          </a>
        </div>

        {/* footer */}
        <div className="FooterWhole">
          <FooterContainer />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
