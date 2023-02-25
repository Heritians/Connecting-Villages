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
                <AboutHeading>Heading 1</AboutHeading>
                <AboutPara>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
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
                <AboutHeading>Heading 2</AboutHeading>
                <AboutPara>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
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
