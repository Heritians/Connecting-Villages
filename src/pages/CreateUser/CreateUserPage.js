import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import CreateUser from "../../components/CreateUser/CreateUser";

export default class CreateUserPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Create User | Heritians</title>
        </Helmet>
        <Header />
        <CreateUser />
      </>
    );
  }
}
