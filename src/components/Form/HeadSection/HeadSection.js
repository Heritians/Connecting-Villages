import { useContext } from "react";
import {
  LogoContainer,
  HeadRow,
  UBAContainer,
  UBATitle,
  UBASubTitle,
  DetailsRow,
  DetailLabel,
  DetailInput,
  DetailsContainer,
} from "./HeadSectionStyles";
import AuthContext from "../../context/Auth";
import UBA_Logo from "../../../assets/images/uba_logo.jpg";
import vitb_logo from "../../../assets/images/vitb_logo.png";

export default function HeadSection() {
  const loginAuthUser = useContext(AuthContext);
  const village = loginAuthUser.user
    ? loginAuthUser.user["sub"].split("_")[2]
    : "Sehore";
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
      <DetailsRow>
        <DetailsContainer>
          <DetailLabel>Village:</DetailLabel>
          <DetailInput type="text" disabled value={village}></DetailInput>
        </DetailsContainer>
        {/* <DetailsContainer>
          <DetailLabel>Gram Panchayat:</DetailLabel>
          <DetailInput type="text" disabled value="Pata Nahi"></DetailInput>
        </DetailsContainer>
        <DetailsContainer>
          <DetailLabel>Ward No.:</DetailLabel>
          <DetailInput type="text" disabled value="Pata Nahi"></DetailInput>
        </DetailsContainer>
      </DetailsRow>
      <DetailsRow>
        <DetailsContainer>
          <DetailLabel>Block:</DetailLabel>
          <DetailInput type="text" disabled value="Sehore"></DetailInput>
        </DetailsContainer>
        <DetailsContainer>
          <DetailLabel>District:</DetailLabel>
          <DetailInput type="text" disabled value="Pata Nahi"></DetailInput>
        </DetailsContainer> */}
        <DetailsContainer>
          <DetailLabel>State:</DetailLabel>
          <DetailInput
            type="text"
            disabled
            value="Madhya Pradesh"
          ></DetailInput>
        </DetailsContainer>
      </DetailsRow>
    </>
  );
}
