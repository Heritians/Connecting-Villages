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
      <br></br>
      <div>
        <h1 className="Heading">OUR INSPIRATIONS</h1>
        <div>
          <ColoredLine color="orange" />
        </div>
      </div>
      <br></br>
      <div name="Carousel">
        <ImageSlider images={images} />
      </div>
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
