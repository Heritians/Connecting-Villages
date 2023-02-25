import { Component } from "react";
import { Link } from "react-router-dom";
import GlobalLinks from "../../assets/js/GlobalLinks";
import {
  MakeContributionButton,
  MakeContributionContainer,
  MakeContributionPara,
} from "./MakeContributionStyles";

export default class MakeContribution extends Component {
  render() {
    return (
      <>
        <MakeContributionContainer>
          <div className="row">
            <MakeContributionPara className="col-md-4">
              Want to make a contribution?
            </MakeContributionPara>
            <MakeContributionButton className="col-md-4">
              <Link
                to={GlobalLinks.GitHub}
                target="_blank"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                Contribute
              </Link>
            </MakeContributionButton>
          </div>
        </MakeContributionContainer>
      </>
    );
  }
}
