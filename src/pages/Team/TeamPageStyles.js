import styled from "styled-components";

export const TeamContainer = styled.div`
  margin-top: 1rem;
  text-align: center;
  justify-content: space-evenly;
  height: max-content;
  min-height: 80vh;
`;

export const TeamCard = styled.div`
  width: 22rem;
  min-height: 29rem;
  background-color: #ffe8c2;
  border-radius: 0.7rem;
  padding: 1.2rem;
  margin: 1rem;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  height: max-content;
  }
`;

export const TeamCardImg = styled.img`
  margin: 0.5rem 0;
  display: inline-block;
  height: 10rem;
  position: relative;
`;

export const TeamCardName = styled.h3`
  text-align: center;
  width: 100%;
  color: #ff7400;
  padding: 0;
  font-weight: 500;
  font-size: 1.7rem;
`;

export const TeamCardTitle = styled.h4`
  font-size: 1.2rem;
  color: #0000008f;
  padding: 0.5rem 0 0;
`;

export const TeamCardDesc = styled.p`
  font-size: 1rem;
  color: #000000;
  padding: 0.5rem;
`;

export const TeamCardSocial = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-evenly;
`;

export const TeamCardSocialLink = styled.a`
  text-decoration: none;
`;

export const TeamCardSocialIcon = styled.i`
  font-size: 1.5rem;
  color: #000000;
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
    color: #ff7400;
    transition: all 0.2s ease-in-out;
  }
`;
