import { Component, useEffect, useState } from "react";
// import useRunOnce from "../../assets/js/useRunOnce";
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
  // state = {
  //   villages: [],
  //   newVillage: "",
  // };

  const [villages, setVillages] = useState([]);
  const [newVillage, setNewVillage] = useState("");
  // constructor(props) {
  //   super(props);
  //   this.
  //   this.GetVillages = this.GetVillages.bind(this);
  //   this.handleVillNameChange = this.handleVillNameChange.bind(this);
  // }

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
    console.log(data.data.village_names);
    setVillages(data.data.village_names);
  };

  const handleVillNameChange = async (e) => {
    // this.state.newVillage = e.target.value;
    setNewVillage(e.target.value);
  };

  const handleAddContainer = async () => {
    console.log("Add Container");
    document.getElementById("add-vill-container").style.display = "flex";
  };

  const handleCancelContainer = async () => {
    console.log("Cancel Container");
    document.getElementById("add-vill-container").style.display = "none";
  };

  const handleAddVillage = async () => {
    console.log("Add Village");
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
    console.log(data);
    if (data?.status === "success") {
      GetVillages();
      console.log("Village Added");
      handleCancelContainer();
    } else {
      console.log("Village Not Added");
    }
  };

  useEffect(() => {
    GetVillages();
  }, []);

  // componentDidMount() {
  //   this.GetVillages();
  // }

  return (
    <>
      <Header />
      <LogosRow />
      <VillagesListContainer>
        <SectionTitleArea>
          <SectionTitle>Our Prosperous Villages</SectionTitle>
          {/* <SectionTitlePara>Sehore District</SectionTitlePara> */}
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
