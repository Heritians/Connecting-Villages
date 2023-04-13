import { useContext } from "react";
import AuthContext from "../../context/Auth";
import {
  DetailsRow,
  DetailsContainer,
  DetailLabel,
  DetailInput,
} from "./VillageDetailsStyles";

export default function VillageDetails() {
  const loginAuthUser = useContext(AuthContext);
  const userVillage = loginAuthUser?.user
    ? loginAuthUser.user["sub"].split("_")[2] +
      (loginAuthUser.user["sub"].split("_")[3]
        ? " " + loginAuthUser.user["sub"].split("_")[3]
        : "")
    : "Not Authenticated";
  return (
    <>
      <DetailsRow>
        <DetailsContainer>
          <DetailLabel>Village:</DetailLabel>
          <DetailInput type="text" disabled value={userVillage}></DetailInput>
        </DetailsContainer>
        {/* <DetailsContainer>
          <DetailLabel>Gram Panchayat:</DetailLabel>
          <DetailInput
            type="text"
            disabled
            value="Gram Panchayat"
          ></DetailInput>
        </DetailsContainer>
        <DetailsContainer>
          <DetailLabel>Ward No.:</DetailLabel>
          <DetailInput type="text" disabled value="Ward No."></DetailInput>
        </DetailsContainer>
      </DetailsRow>
      <DetailsRow>
        <DetailsContainer>
          <DetailLabel>Block:</DetailLabel>
          <DetailInput type="text" disabled value="Sehore"></DetailInput>
        </DetailsContainer>
        <DetailsContainer>
          <DetailLabel>District:</DetailLabel>
          <DetailInput type="text" disabled value="District"></DetailInput>
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
