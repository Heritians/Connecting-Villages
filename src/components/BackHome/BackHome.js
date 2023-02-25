import { Component } from "react";
import { Link } from "react-router-dom";
import { BackHomeMain, BackHomeP } from "./BackHomeStyles";

export default class BackHome extends Component {
  render() {
    return (
      <>
        <BackHomeMain>
          <Link to="/" style={{ textDecoration: "none" }}>
            <BackHomeP>Go Back Home</BackHomeP>
          </Link>
        </BackHomeMain>
      </>
    );
  }
}
