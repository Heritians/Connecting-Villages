import { Component } from "react";
import { Link } from "react-router-dom";
import GlobalLinks from "../../assets/js/GlobalLinks";
import {
  FooterContainer,
  LocationContainer,
  HeritiansLogo,
  LocationPara,
  LinksContainer,
  QuickLinks,
  LinksTitle,
  QuickLinksContainer,
  QuickLinksItem,
  LogoLocationContainer,
  LocationParaName,
  CopyrightMain,
  Copyright,
} from "./FooterStyles";

export default class Footer extends Component {
  render() {
    return (
      <>
        <FooterContainer className="row">
          <LogoLocationContainer className="col-md-4 d-flex align-items-stretch">
            <HeritiansLogo>Heritians</HeritiansLogo>
            <LocationContainer>
              <LocationParaName>
                Unnat Bharat Abhiyan Cell, VIT Bhopal University
              </LocationParaName>
              <LocationPara>
                Bhopal - Indore Highway
                <br />
                Kothri Kalan, Sehore
                <br />
                Madhya Pradesh, India 466114
              </LocationPara>
            </LocationContainer>
          </LogoLocationContainer>
          <LinksContainer className="col-md-4 d-flex align-items-stretch">
            <QuickLinksContainer>
              <LinksTitle>Quick Links</LinksTitle>
              <QuickLinks>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <QuickLinksItem>Home</QuickLinksItem>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <QuickLinksItem>About Us</QuickLinksItem>
                </Link>
                <Link to="/team" style={{ textDecoration: "none" }}>
                  <QuickLinksItem>Our Team</QuickLinksItem>
                </Link>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <QuickLinksItem>Contact Us</QuickLinksItem>
                </Link>
              </QuickLinks>
            </QuickLinksContainer>
            <QuickLinksContainer>
              <LinksTitle>Media</LinksTitle>
              <QuickLinks>
                <Link
                  to={GlobalLinks.Facebook}
                  style={{ textDecoration: "none" }}
                >
                  <QuickLinksItem>Facebook</QuickLinksItem>
                </Link>
                <Link
                  to={GlobalLinks.Linkedin}
                  style={{ textDecoration: "none" }}
                >
                  <QuickLinksItem>LinkedIn</QuickLinksItem>
                </Link>
                <Link
                  to={GlobalLinks.GitHub}
                  style={{ textDecoration: "none" }}
                >
                  <QuickLinksItem>GitHub</QuickLinksItem>
                </Link>
              </QuickLinks>
            </QuickLinksContainer>
          </LinksContainer>
        </FooterContainer>
        <CopyrightMain className="row">
          <Copyright>
            &copy; Copyright <strong>Heritians</strong>. All Rights Reserved
          </Copyright>
        </CopyrightMain>
      </>
    );
  }
}
