import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import OurTeam from "./pages/ourTeam";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";

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
      
    </div>
  );
}

export default App;
