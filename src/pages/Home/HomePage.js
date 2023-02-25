import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import LogosRow from "../../components/LogosRow/LogosRow";
import Hero from "../../components/Hero/Hero";
import Inspirations from "../../components/Inspirations/Inspirations";
import MakeContribution from "../../components/MakeContribution/MakeContribution";
import Footer from "../../components/Footer/Footer";
import Villages from "../../components/Villages/Villages";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

export default class HomePage extends Component {
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
          <title>Heritians</title>
        </Helmet>
        <Header />
        <LogosRow />
        <Hero />
        <Villages />
        <MakeContribution />
        <Inspirations />
        <Footer />
        <BackToTopButton />
      </>
    );
  }
}
