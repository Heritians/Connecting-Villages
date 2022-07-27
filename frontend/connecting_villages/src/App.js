import React, { useState } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages";
import OurTeam from "./components/Pages/ourTeam";
import Contact from "./components/Pages/contact";
import SignUp from "./components/Pages/signup";
import images from "./images";
import ImageSlider from "./imageSlider";
import { FooterContainer } from "./containers/footer";


const ColoredLine = ({ color }) => (
  <hr
    style={{
      color,
      backgroundColor: color,
      height: 2,
      width: 1200
    }}
  />
);


function App() {
  return (
    <div>
      <div className="Navigation Bar">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/OurTeam" component={OurTeam} />
            <Route path="/contact" component={Contact} />
            <Route path="/sign-up" component={SignUp} />
          </Routes>
        </Router>
      </div>

      <div className="Box">
        <div className="Contribution" >
          <div class="main-footer">
            <div class="container">
              <div class="row">
                <div class="col-1">
                </div>
              </div>
              <div class="row">
                <div class="col-1">
                  <div className="Contribution-header">
                    <p className="text">Want to learn how you can make a contribution?</p>
                  </div>
                </div>

                <div class="col-2">

                  <div className="ButtonImp">
                    <button className="Contribute" style={{ color: "white", fontSize: 18, borderWidth: 1, borderRadius: 10, borderColor: 'rgb(100%,100%,100%,100%)', }}>Click Here</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="Heading">OUR INSPIRATIONS</h1>
        <div className="OrangeLine">
          <ColoredLine color="orange" />
        </div>
      </div>

      <div name="Slider">
        <div name="Carousel">
          <ImageSlider images={images} />
        </div>
      </div>

      <div className='Footerings'>
        <div className="FooterWhole">
          <FooterContainer />
        </div>
      </div>

    </div>
  );
}

export default App;
