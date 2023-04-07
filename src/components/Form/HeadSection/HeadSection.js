import {
  LogoContainer,
  HeadRow,
  UBAContainer,
  UBATitle,
  UBASubTitle,
} from "./HeadSectionStyles";
import UBA_Logo from "../../../assets/images/uba_logo.jpg";
import vitb_logo from "../../../assets/images/vitb_logo.png";

export default function HeadSection() {
  return (
    <>
      <HeadRow>
        <LogoContainer src={UBA_Logo} alt="UBA" />
        <UBAContainer>
          <UBASubTitle>Annexture VI</UBASubTitle>
          <UBATitle>
            UNNAT BHARAT ABHIYAN (UBA) Baseline Household Survey Form
          </UBATitle>
        </UBAContainer>
        <LogoContainer src={vitb_logo} alt="VITB Logo" />
      </HeadRow>
    </>
  );
}
