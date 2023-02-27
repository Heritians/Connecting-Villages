import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Contact from "../../components/Contact/Contact";
import BackHome from "../../components/BackHome/BackHome";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

export default class ContactPage extends Component {
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
          <title>Contact Us | Heritians</title>
        </Helmet>
        <Header />
        <Contact />
        <BackHome />
        <Footer />
        <BackToTopButton />
      </>
    );
  }
}
