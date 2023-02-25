import { Component } from "react";
import { Link } from "react-router-dom";
import {
  VillagesContainer,
  VillageCard,
  VillageName,
  VillageImage,
  VillageDescription,
  VillageButtonsRow,
  ViewMoreButton,
} from "./VillagesStyles";
import {
  SectionTitle,
  SectionTitleArea,
  SectionTitlePara,
} from "../GlobalStyles";
import VillagesList from "../../assets/js/Villages";

export default class Villages extends Component {
  render() {
    return (
      <>
        <div className="container">
          <SectionTitleArea>
            <SectionTitle>Explore the Prosperous Villages</SectionTitle>
            <SectionTitlePara>Sehore District</SectionTitlePara>
          </SectionTitleArea>
        </div>
        <div className="container">
          <VillagesContainer className="row">
            {VillagesList.map((village) => (
              <VillageCard key={village.id}>
                <VillageName>{village.title}</VillageName>
                <VillageImage src={village.image}></VillageImage>
                <VillageDescription>{village.description}</VillageDescription>
                <VillageButtonsRow>
                  {village.link ? (
                    <Link to={village.link} style={{ textDecoration: "none" }}>
                      <ViewMoreButton>View Details</ViewMoreButton>
                    </Link>
                  ) : (
                    <ViewMoreButton disabled>View Details</ViewMoreButton>
                  )}
                </VillageButtonsRow>
              </VillageCard>
            ))}
          </VillagesContainer>
        </div>
      </>
    );
  }
}
