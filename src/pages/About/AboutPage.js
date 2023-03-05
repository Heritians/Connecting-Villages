import React, { Component } from "react";
import { Helmet } from "react-helmet";
import {
  AboutContainer,
  AboutContentContainer,
  AboutHeading,
  AboutImg,
  AboutImgContainer,
  AboutPara,
  AboutParaContainer,
  AboutSubTitle,
  AboutTitle,
} from "./AboutPageStyles";
import img1 from "../../assets/images/about/img1.png";
import img2 from "../../assets/images/about/img2.jpg";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BackHome from "../../components/BackHome/BackHome";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

export default class AboutPage extends Component {
  render() {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    scrollToTop();
    return (
      <>
        <Helmet>
          <title>About Us | Heritians</title>
        </Helmet>
        <Header />
        <div className="container">
          <AboutContainer>
            <AboutTitle>About Us</AboutTitle>
            <AboutSubTitle>Our Motto:</AboutSubTitle>
            <AboutContentContainer className="row">
              <AboutParaContainer className="col-md-5 d-flex align-items-stretch">
                <AboutHeading>Motivation</AboutHeading>
                <AboutPara>
                  70% of the country’s population still resides in rural areas.
                  Despite this, it only contributes about 17% to India’s GDP.
                  This is because of the disparity in development between rural
                  and urban areas in almost all areas like healthcare,
                  education, infrastructure, employment opportunities etc. The
                  lack of facilities and opportunities has also led to an influx
                  of migration to urban areas in the past few decades. As a
                  result, the cities are getting overpopulated, polluted and the
                  cost of living is skyrocketing.
                </AboutPara>
              </AboutParaContainer>
              <AboutImgContainer className="col-md-5 d-flex align-items-stretch">
                <AboutImg src={img1} alt="img1" />
              </AboutImgContainer>
            </AboutContentContainer>
            <AboutContentContainer className="row">
              <AboutImgContainer className="col-md-4 d-flex align-items-stretch">
                <AboutImg
                  src={img2}
                  alt="img2"
                  style={{ border: "0.2rem solid #ff7400" }}
                />
              </AboutImgContainer>
              <AboutParaContainer className="col-md-5 d-flex align-items-stretch">
                <AboutHeading>Objective</AboutHeading>
                <AboutPara>
                  Gandhi ji, in “Hind Swaraj” foresaw that the western
                  development standard of urbanization is not sustainable.
                  Hence, it is imperative to promote the holistic development of
                  villages in a way that all their standard needs are locally
                  met. The Unnat Bharat Abhiyan is a step forward on the path of
                  empowering the agrarian economy. By being a part of this
                  program, we hope to make a small contribution to this
                  initiative. With this website, we will be able to digitize the
                  “Unnat Bharat Abhiyan Baseline Household Survey Form” and
                  analyze the data entered. Through this website, we hope to
                  lend the authorities a hand in identifying the areas that
                  might need urgent attention.
                </AboutPara>
              </AboutParaContainer>
            </AboutContentContainer>
          </AboutContainer>
        </div>
        <BackHome />
        <Footer />
        <BackToTopButton />
      </>
    );
  }
}
