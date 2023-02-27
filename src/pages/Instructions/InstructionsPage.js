import React, { Component } from "react";
import { Helmet } from "react-helmet";
import {
  InstructionsContainer,
  InstructionsContentContainer,
  InstructionsHeading,
  InstructionsImg,
  InstructionsImgContainer,
  InstructionsPara,
  InstructionsParaContainer,
  InstructionsSubTitle,
  InstructionsTitle,
} from "./InstructionsPageStyles";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BackHome from "../../components/BackHome/BackHome";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import contact_us from "../../assets/images/instructions/contact_us.png";
import login from "../../assets/images/instructions/login.png";

export default class InstructionsPage extends Component {
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
          <title>Intructions | Heritians</title>
        </Helmet>
        <Header />
        <div className="container">
          <InstructionsContainer>
            <InstructionsTitle>Instructions</InstructionsTitle>
            <InstructionsSubTitle>
              Getting Started, FAQ, and more
            </InstructionsSubTitle>
            <InstructionsContentContainer className="row">
              <InstructionsParaContainer>
                <InstructionsHeading>Getting Started</InstructionsHeading>
                <InstructionsPara>
                  Step 1: Contact an Admin/ Owner to get registered for an
                  account.
                  <br />
                  Step 2: Using the unique credentials you receive after
                  registration, Login to the website.
                  <br />
                  Step 3: Access the available actions you can perform, from the
                  Services Tab.
                </InstructionsPara>
              </InstructionsParaContainer>
            </InstructionsContentContainer>
            <InstructionsImgContainer className="row">
              <InstructionsImg src={contact_us} alt="contact_us" />
              <InstructionsImg
                src={login}
                alt="login"
                style={{ border: "0.2rem solid #ff7400" }}
              />
            </InstructionsImgContainer>
          </InstructionsContainer>
        </div>
        <BackHome />
        <Footer />
        <BackToTopButton />
      </>
    );
  }
}
