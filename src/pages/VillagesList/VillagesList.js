import { useEffect, useState } from "react";
import BackHome from "../../components/BackHome/BackHome";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LogosRow from "../../components/LogosRow/LogosRow";
import {
  AddVillageButton,
  AddVillButton,
  AddVillButtonRow,
  AddVillCancel,
  AddVillContainer,
  AddVillHeading,
  AddVillInput,
  ButtonsRow,
  DeleteVillageButton,
  VillagesContainer,
  VillagesListContainer,
  VillagesListItem,
  VillagesListItemContainer,
} from "./VillagesListStyles";
import { SectionTitle, SectionTitleArea } from "../../components/GlobalStyles";

export default function VillagesList() {
  const [villages, setVillages] = useState([]);
  const [newVillage, setNewVillage] = useState("");
  const GetVillages = async () => {
    const settings = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer " +
          JSON.parse(localStorage.getItem("authTokens")).access_token,
        "Content-Type": "application/json",
      },
    };

    let newURL = "https://ubaformapi.vercel.app/ops/get_village_list";
    const fetchResponse = await fetch(newURL, settings);
    const data = await fetchResponse.json();
    setVillages(data.data.village_names);
  };

  const handleVillNameChange = async (e) => {
    setNewVillage(e.target.value);
  };

  const handleAddContainer = async () => {
    document.getElementById("add-vill-container").style.display = "flex";
  };

  const handleCancelContainer = async () => {
    document.getElementById("add-vill-container").style.display = "none";
  };

  const handleAddVillage = async () => {
    const VillageName = newVillage.split(" ").join("_");
    const settings = {
      method: "PUT",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer " +
          JSON.parse(localStorage.getItem("authTokens")).access_token,
        "Content-Type": "application/json",
      },
      body: "",
    };
    let newURL =
      "https://ubaformapi.vercel.app/ops/update_village_list?dbname=" +
      VillageName;
    const fetchResponse = await fetch(newURL, settings);
    const data = await fetchResponse.json();
    if (data?.status === "success") {
      GetVillages();
      handleCancelContainer();
    } else {
      console.log("Error while adding village");
    }
  };

  useEffect(() => {
    GetVillages();
  }, []);

  return (
    <>
      <Header />
      <LogosRow />
      <VillagesListContainer>
        <SectionTitleArea>
          <SectionTitle>Our Prosperous Villages</SectionTitle>
        </SectionTitleArea>

        <VillagesContainer>
          {villages !== null
            ? villages.map((village, index) => {
                return (
                  <VillagesListItemContainer key={index}>
                    <VillagesListItem>
                      {village.split("_").join(" ")}
                    </VillagesListItem>
                  </VillagesListItemContainer>
                );
              })
            : null}
        </VillagesContainer>

        {villages.length !== 0 ? (
          <ButtonsRow>
            <AddVillageButton onClick={handleAddContainer}>
              Add Village
            </AddVillageButton>
            <DeleteVillageButton disabled>Delete Village</DeleteVillageButton>
          </ButtonsRow>
        ) : null}

        <AddVillContainer id="add-vill-container">
          <AddVillHeading>Add Village</AddVillHeading>
          <AddVillInput
            type="text"
            placeholder="Enter Village Name"
            onChange={handleVillNameChange}
            required
          />
          <AddVillButtonRow>
            <AddVillCancel onClick={handleCancelContainer}>
              Cancel
            </AddVillCancel>
            <AddVillButton onClick={handleAddVillage}>
              Add Village
            </AddVillButton>
          </AddVillButtonRow>
        </AddVillContainer>
      </VillagesListContainer>

      <BackHome />
      <Footer />
    </>
  );
}
