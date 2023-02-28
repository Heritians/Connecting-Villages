import { Component } from "react";
import { Link } from "react-router-dom";
import {
  HeadingText,
  GetStartedBtn,
  HeroContainer,
  HeadingPara,
  ButtonWrapper,
} from "./HeroStyles";

export default class Hero extends Component {
  render() {
    return (
      <>
        <HeroContainer>
          <div className="row">
            <div className="container">
              <HeadingText>
                Data Collection
                <br />
                and Analysis
              </HeadingText>
              <HeadingPara>
                The website that digitizes the ‘Unnat Bharat Abhiyan Baseline
                Household Survey Form’. We also intend to analyze the data
                entered in the form from the villages and present it graphically
                for easy comprehension. With this data, it will be easier for
                the concerned authorities to identify which areas need immediate
                help
              </HeadingPara>
              <ButtonWrapper>
                <Link to="/instructions" style={{ textDecoration: "none" }}>
                  <GetStartedBtn>Get Started</GetStartedBtn>
                </Link>
              </ButtonWrapper>
            </div>
          </div>
        </HeroContainer>
      </>
    );
  }
}
