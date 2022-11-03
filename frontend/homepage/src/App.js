import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cards from "./components/Cards";               //Component 'Cards' is imported 
import Heading from "./components/Heading";           // Component 'Heading' is imported 
import OurTeam from "./components/Pages/ourTeam";
import Contact from "./components/Pages/contact";
import SignUp from "./components/Pages/signup";
import Home3 from "./components/Pages";
import images from "./images";
import ImageSlider from "./imageSlider";
import { FooterContainer } from "./components/containers/footer";
// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';

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
          <Route path='/sign-up' />
        </Routes>
      </Router>

    {/* middle part */}
    {/* // division tag defines parent class 'App' */}
    <div className="App">             
      
      {/* divison tag for a separate class for headings  */}
      <div className="head">          
        <Heading></Heading>
      </div>
      
      {/* division class created to position 5 card components without disrupting the aligment of headings */}
      <div className="all_cards">     
       
        {/* 'Cards' is declared 5 times to render 5 duplicate card components */}
        {/* with the help of props, the dynamic elements of the card component are declared and then their separate values are referenced */}
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
    </>
  );
}

export default App;