import { Component } from "react";
import { Link } from "react-router-dom";
import {
  LogoContainer,
  LogoRow,
  UBAPara,
  UBAContainer,
  UBATitleHindi,
  UBATitleEnglish,
} from "./LogosRowStyles";
import UBA_Logo from "../../assets/images/uba_logo.jpg";
import vitb_Logo from "../../assets/images/vitb_logo.png";

export default class LogosRow extends Component {
  render() {
    return (
      <>
        <div className="row">
          <LogoRow>
            <LogoContainer src={vitb_Logo} alt="VITB" />
            <Link
              to={"https://unnatbharatabhiyan.gov.in/"}
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <UBAContainer>
                <UBATitleHindi> उन्नत भारत अभियान </UBATitleHindi>
                <UBATitleEnglish>UNNAT BHARAT ABHIYAN</UBATitleEnglish>
                <UBAPara>
                  {" "}
                  शिक्षित भारत-स्वस्थ भारत- स्वच्छ भारत- स्वावलंबी भारत- संपन्न
                  भारत{" "}
                </UBAPara>
              </UBAContainer>
            </Link>

            <LogoContainer src={UBA_Logo} alt="UBA" />
          </LogoRow>
        </div>
      </>
    );
  }
}
