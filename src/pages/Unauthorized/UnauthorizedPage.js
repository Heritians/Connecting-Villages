import { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LogosRow from "../../components/LogosRow/LogosRow";
import {
  UnauthorizedButton,
  UnauthorizedContainer,
  UnauthorizedText,
  UnauthorizedTitle,
} from "./UnauthorizedPageStyles";

export default class UnauthorizedPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Access Denied</title>
        </Helmet>
        <Header />
        <LogosRow />
        <UnauthorizedContainer>
          <UnauthorizedTitle>Access Denied</UnauthorizedTitle>
          <UnauthorizedText>
            You are not authorized to view this page.
          </UnauthorizedText>
          <Link to="/" style={{ marginTop: "1rem", textDecoration: "none" }}>
            <UnauthorizedButton>Go back home</UnauthorizedButton>
          </Link>
        </UnauthorizedContainer>
        <Footer />
      </>
    );
  }
}
