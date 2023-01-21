import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Home_p1/Navbar/Navbar';
import Home from './components/Home_p1/HomePage';


import { AuthProvider } from './components/context/AuthContext';
import Popup from './components/Home_p1/Navbar/Login/Popup.js';
import Forms from './components/Home_p1/Forms';
import CreateAccount from './components/Home_p1/Navbar/CreateAccount/CreateAccount';


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
            <Route path="/products" />
            <Route path="/fillTheForm" exact element={<Forms />} />
            <Route path="/CreateAccount" exact element={<CreateAccount trigger={true} />} />
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