import React, { Component } from "react";
import { Helmet } from "react-helmet";
import {
  NoPageContainer,
  NoPageSubTitle,
  NoPageTitle,
  NoPagePara,
  GoBackHome,
  BackHomeButtonRow,
} from "./NoPageStyles";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

export default class NoPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Page not found | Heritians</title>
        </Helmet>
        <Header />
        <NoPageContainer className="container">
          <NoPageTitle>404</NoPageTitle>
          <NoPageSubTitle>Page not found</NoPageSubTitle>
          <NoPagePara>The page you were looking for was not found.</NoPagePara>
          <BackHomeButtonRow>
            <Link to="/" style={{ textDecoration: "none" }}>
              <GoBackHome>Go back home</GoBackHome>
            </Link>
          </BackHomeButtonRow>
        </NoPageContainer>
        <Footer />
      </>
    );
  }
}
