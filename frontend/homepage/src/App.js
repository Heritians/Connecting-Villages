import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Home_p1/Navbar/Navbar';
import Home from './components/Home_p1/HomeTop';
import Popup from './components/Home_p1/Navbar/Login/Popup.js';


import Cards from "./components/Home_p2/Cards";              
import Heading from "./components/Home_p2/Heading";

import carousel_images from "./components/Home_p3/carousel/carousel_images";
import ImageSlider from "./components/Home_p3/carousel/imageSlider";
import { FooterContainer } from "./components/Home_p3/footer";

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
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/services'/>
          <Route path='/products' />
        </Routes>
      </Router>
      

    {/* middle part */}
   
    <div className="App">             
      
      {/* divison tag for a separate class for headings  */}
      <div className="position-absolute top-50 start-150 translate-middle">          
        <Heading></Heading>
      </div>
      

      <div className="all_cards">     
       
        <Cards
          img="https://www.indiaspend.com/wp-content/uploads/village_620.png" 
          alt = "An image of Lasudiya Khas is supposed to be displayed here"
          title="Lasudiya Khas"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Cards
          img="https://www.indiaspend.com/wp-content/uploads/village_620.png"
          alt = "An image of Gawa Kheda is supposed to be displayed here"
          title="Gawa kheda"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Cards
          img="https://www.indiaspend.com/wp-content/uploads/village_620.png"
          alt = "An image of Mana Khedi is supposed to be displayed here"
          title="Mana Khedi"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Cards
          img="https://www.indiaspend.com/wp-content/uploads/village_620.png"
          alt = "An image of Nepaniya Kalan is supposed to be displayed here"
          title="Nipaniya Kalan"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Cards
          img="https://www.indiaspend.com/wp-content/uploads/village_620.png"
          alt = "An image of Beda Khedi is supposed to be displayed here"
          title="Beda Khedi"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      
      
      </div>
    
    </div>

    {/* lower part */}
    <div>
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
                  <button className="Contribute" style={{ color: "white", fontSize: 18, borderWidth: 1, 
                     borderColor: 'rgb(100%,100%,100%,100%)', position: 'relative', margin: 6}}>Click Here</button>
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
          <ImageSlider images={carousel_images} />
        </div>
      </div>

      <div className='Footerings'>
        <div className="FooterWhole">
          <FooterContainer />
        </div>
      </div>
      {/* <OurTeam></OurTeam>     */}

    </div>
    </>
  );
}

export default App;