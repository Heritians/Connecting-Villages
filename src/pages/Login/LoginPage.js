import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import Login from "../../components/Login/Login";

export default class LoginPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Login | Heritians</title>
        </Helmet>
        <Header />
        <Login />
      </>
    );
  }
}
