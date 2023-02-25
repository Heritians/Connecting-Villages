import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import BulkUser from "../../components/CreateUser/BulkUser";

export default class BulkUserPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Bulk Users | Heritians</title>
        </Helmet>
        <Header />
        <BulkUser />
      </>
    );
  }
}
