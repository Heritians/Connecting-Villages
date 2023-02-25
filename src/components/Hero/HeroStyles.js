import styled from "styled-components";
import hero_bg from "../../assets/images/hero_bg.png";

export const HeroContainer = styled.div`
  padding: 2rem;
  background-image: url(${hero_bg});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  @media (max-width: 768px) {
    height: max-content;
    background-size: cover;
  }
`;

export const HeroWrapper = styled.div`
  padding: 3rem;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeadingText = styled.h1`
  color: #ffffff;
  font-size: 3.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeadingPara = styled.p`
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const GetStartedBtn = styled.span`
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  background: #ff7400;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  &:hover {
    color: #000000;
    background: #ff9944;
    transition: all 0.2s ease-in-out;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
