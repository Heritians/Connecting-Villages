import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Home_p1/Navbar/Navbar';
import Home from './components/Home_p1/HomePage';

import { AuthProvider } from './components/context/AuthContext';
import Popup from './components/Home_p1/Navbar/Login/Popup.js';
import Forms from './components/Home_p1/Forms';
import CreateAccount from './components/Home_p1/Navbar/CreateAccount/CreateAccount';
import ContactUs from './components/Home_p1/Navbar/Nav_elements/ContactUs';
import AboutUs from './components/Home_p1/Navbar/Nav_elements/AboutUs';
import ServicesSmall from './components/Home_p1/Navbar/Dropdown/ServicesSmall';
import OurTeam from './components/Pages/ourTeamPage/OurTeam';
import Instructions from './components/Home_p1/Instructions';

// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';
// import Contact from "./components/Pages/contact";
// import Home3 from "./components/Pages";
// import OurTeam from './components/Pages/ourTeamPage/OurTeam';

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
    <>
      {/* upper part */}
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/signin" exact element={<Popup trigger={true} />} />
            <Route path="/" exact element={<Home />} />
            <Route path="/AboutUs" exact element={<AboutUs/>} />
            <Route path="/fillTheForm" exact element={<Forms />} />
            <Route path="/CreateAccount" exact element={<CreateAccount trigger={true} />} />
            <Route path="/ContactUs" exact element={<ContactUs trigger={true} />} />
            <Route path="/ServicesSmall" exact element={<ServicesSmall trigger={true} />} />
            <Route path="/OurTeam" exact element={<OurTeam trigger={true} />} />
            <Route path="/Instructions" exact element={<Instructions/>} />

          </Routes>
        </AuthProvider>
      </Router>

      {/* middle part */}

      {/* divison tag for a separate class for headings  */}
      <div className="App"></div>
    </>
  );
}

export default App;