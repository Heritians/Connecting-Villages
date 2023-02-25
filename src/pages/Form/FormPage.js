import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BackHome from "../../components/BackHome/BackHome";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import HeadSection from "../../components/Form/HeadSection/HeadSection";
import Form from "../../components/Form/Form";

export default class FormPage extends Component {
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
          <title>Baseline Household Survey Form | Heritians</title>
        </Helmet>
        <Header />
        <HeadSection />
        <Form />
        <BackHome />
        <Footer />
        <BackToTopButton />
      </>
    );
  }
}
