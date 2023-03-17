import React, { Component } from "react";
import { Helmet } from "react-helmet";
import {
  TeamCard,
  TeamCardImg,
  TeamCardName,
  TeamCardSocial,
  TeamCardSocialIcon,
  TeamCardSocialLink,
  TeamCardTitle,
  TeamContainer,
} from "./TeamPageStyles";
import { SectionTitleArea, SectionTitle } from "../../components/GlobalStyles";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BackHome from "../../components/BackHome/BackHome";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import TeamMembers from "../../assets/js/TeamMembers";
import Contributors from "../../assets/js/Contributors";

export default class TeamPage extends Component {
  render() {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    scrollToTop();
    return (
      <>
        <Helmet>
          <title>Team | Heritians</title>
        </Helmet>
        <Header />
        <SectionTitleArea>
          <SectionTitle>Team</SectionTitle>
        </SectionTitleArea>
        <div className="container">
          <TeamContainer className="row">
            {TeamMembers.map((member) => (
              <TeamCard key={member.id}>
                <TeamCardImg src={member.image} alt={member.imageAlt} />
                <TeamCardName>{member.name}</TeamCardName>
                <TeamCardTitle>{member.title}</TeamCardTitle>
                <TeamCardSocial>
                  {member.github ? (
                    <TeamCardSocialLink href={member.github}>
                      <TeamCardSocialIcon className="bi bi-github" />
                    </TeamCardSocialLink>
                  ) : null}

                  {member.linkedin ? (
                    <TeamCardSocialLink href={member.linkedin}>
                      <TeamCardSocialIcon className="bi bi-linkedin" />
                    </TeamCardSocialLink>
                  ) : null}
                </TeamCardSocial>
              </TeamCard>
            ))}
          </TeamContainer>
        </div>
        <SectionTitleArea>
          <SectionTitle>contributors</SectionTitle>
        </SectionTitleArea>
        <div className="container">
          <TeamContainer className="row">
            {Contributors.map((contributor) => (
              <TeamCard key={contributor.id}>
                <TeamCardImg
                  src={contributor.image}
                  alt={contributor.imageAlt}
                />
                <TeamCardName>{contributor.name}</TeamCardName>
                <TeamCardTitle>{contributor.title}</TeamCardTitle>
                <TeamCardSocial>
                  {contributor.github ? (
                    <TeamCardSocialLink href={contributor.github}>
                      <TeamCardSocialIcon className="bi bi-github" />
                    </TeamCardSocialLink>
                  ) : null}

                  {contributor.linkedin ? (
                    <TeamCardSocialLink href={contributor.linkedin}>
                      <TeamCardSocialIcon className="bi bi-linkedin" />
                    </TeamCardSocialLink>
                  ) : null}
                </TeamCardSocial>
              </TeamCard>
            ))}
          </TeamContainer>
        </div>
        <BackHome />
        <Footer />
        <BackToTopButton />
      </>
    );
  }
}
