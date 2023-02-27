import styled from "styled-components";

export const VillagesContainer = styled.div`
  margin-top: 1rem;
  text-align: center;
  justify-content: space-evenly;
  height: max-content;
  min-height: 80vh;
`;

export const VillageCard = styled.div`
  width: 20rem;
  height: 24rem;
  background-color: #ffe8c2;
  border-radius: 0.7rem;
  padding: 1.2rem;
  margin: 1rem;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  height: max-content;
  &:hover {
    transform: scale(1.03);
    transition: all 0.2s ease-in-out;
  }
`;

export const VillageName = styled.h1`
  text-align: center;
  width: 100%;
  color: #000000;
  padding: 0;
  font-weight: 700;
  font-size: 2rem;
`;

export const VillageImage = styled.img`
  margin: 0.5rem 0;
  display: inline-block;
  height: 10rem;
  position: relative;
`;

export const VillageDescription = styled.p`
  font-size: 1rem;
  color: #000000;
  padding: 0.5rem;
`;

export const VillageButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
`;

export const ViewMoreButton = styled.button`
  display: block;
  position: relative;
  padding: 0.5rem 1rem 0.5rem;
  width: max-content;
  border-radius: 1rem;
  border: none;
  font-size: 1rem;
  background-color: #231bbc;
  color: #ffffff;
  text-decoration: none;
  text-align: center;
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
    color: #000000;
    background-color: #ff7400;
    transition: all 0.2s ease-in-out;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
