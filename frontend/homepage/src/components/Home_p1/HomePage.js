import React from 'react';
import '../../App.css';
import './HomePage.css';

import { Button } from './Navbar/Login/Button';
import { FooterContainer } from '../Home_p3/footer';
import ImageSlider from '../Home_p3/carousel/imageSlider';
import carousel_images from '../Home_p3/carousel/carousel_images';
import Heading from '../Home_p2/Heading';
import Cards from '../Home_p2/Cards';





function HomePage() {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color,
        backgroundColor: color,
        height: 2,
        width: 1200,
      }}
    />
  );
  return (
    <>
      <div className="hero-container">
        {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
        <div className="hero-top">
          <img
            className="herologo-1"
            src="./images/vit logo.jpg"
            alt="VIT Logo"
          ></img>
          <img
            className="herologo-2"
            src="./images/img-8.PNG"
            alt="UBA-Logo"
          ></img>
          <img className="herologo-3" src="./images/img-1.jpg" alt="UBA"></img>
        </div>
        <div >
        <h1>Data Collection and Analysis</h1>
        <p>
          The website that digitalizes the ‘Unnat Bharat Abhiyan Baseline
          Household Survey Form’. We also intend to analyze the data entered in
          the form from the villages and present it graphically for easy
          comprehension. With this data, it will be easier for the concerned
          authorities to identify which areas need immediate help
        </p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
        </div >
        {/* <div className="hero-gallery"></div>
        <div className="hero-bottom">
          <p className="hero-bottom-txt">
            Want to input new data? Click the button
          </p>
          <div className="form-btn">
            <Button className="btns" buttonStyle="btn--outline">
              Fill the Form
            </Button>
          </div>
        </div> */}
        </div>
      </div>
      <div className="position-absolute top-50 start-150 translate-middle">
        <Heading></Heading>
      </div>

      <div className="all_cards">
        <Cards
          img="https://www.indiaspend.com/wp-content/uploads/village_620.png"
          alt="An image of Lasudiya Khas is supposed to be displayed here"
          title="Lasudiya Khas"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Cards
          img="https://www.indiaspend.com/wp-content/uploads/village_620.png"
          alt="An image of Gawa Kheda is supposed to be displayed here"
          title="Gawa kheda"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Cards
          img="https://www.indiaspend.com/wp-content/uploads/village_620.png"
          alt="An image of Mana Khedi is supposed to be displayed here"
          title="Mana Khedi"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Cards
          img="https://www.indiaspend.com/wp-content/uploads/village_620.png"
          alt="An image of Nepaniya Kalan is supposed to be displayed here"
          title="Nipaniya Kalan"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Cards
          img="https://www.indiaspend.com/wp-content/uploads/village_620.png"
          alt="An image of Beda Khedi is supposed to be displayed here"
          title="Beda Khedi"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>

      {/* lower part */}
      <div>
        <div className="Box">
          <div className="Contribution">
            <div class="main-footer">
              <div class="container">
                <div class="row">
                  <div class="col-1"></div>
                </div>
                <div class="row">
                  <div class="col-1">
                    <div className="Contribution-header">
                      <p className="text">
                        Want to learn how you can make a contribution?
                      </p>
                    </div>
                  </div>

                  <div class="col-2">
                    <div className="ButtonImp">
                      <button
                        className="Contribute"
                        style={{
                          color: "white",
                          fontSize: 18,
                          borderWidth: 1,
                          borderColor: "rgb(100%,100%,100%,100%)",
                          position: "relative",
                          margin: 6,
                        }}
                      >
                        Click Here
                      </button>
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

        <div className="Footerings">
          <div className="FooterWhole">
            <FooterContainer />
          </div>
        </div>
        {/* <OurTeam></OurTeam>     */}
      </div>
    </>
  );
}

export default HomePage;