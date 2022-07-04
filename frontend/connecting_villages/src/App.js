import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import OurTeam from "./pages/ourTeam";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";
import images from "./images";
import ImageSlider from "./imageSlider";
import { FooterContainer } from './containers/footer'

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
      <div>
        <h1 className="Heading">OUR INSPIRATIONS</h1>
        <hr
          className="Horizontal Line"
          style={{
            background: "orange",
            color: "orange",
            borderColor: "orange",
            height: "1px",
            width: "1200px",
          }}
        />
      </div>
      <div name="Carousel">
        <ImageSlider images={images} />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


      <div className="Footer">
      <FooterContainer />
      </div>
    </div>
  );
}

export default App;
