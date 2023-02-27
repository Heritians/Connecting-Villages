import styled from "styled-components";

export const AboutContainer = styled.div`
  padding: 2rem 0;
`;

export const AboutTitle = styled.h1`
  font-size: 3.5rem;
  padding: 1rem 0 0 0;
  color: #231bbc;
  font-weight: 300;
`;

export const AboutSubTitle = styled.p`
  font-size: 1.5rem;
  color: #231bbc;
  font-weight: 200;
`;

export const AboutHeading = styled.h2`
  font-size: 2rem;
  color: #ff7400;
  font-weight: 400;
  padding: 0.7rem 0;
`;

export const AboutPara = styled.p`
  font-size: 1.1rem;
  color: #231bbc;
`;

export const AboutImg = styled.img`
  width: 30rem;
  height: 17rem;
  object-fit: cover;
  border-radius: 0.8rem;
  border: 0.2rem solid #231bbc;
  @media screen and (max-width: 768px) {
    width: 20rem;
    height: 12rem;
  }
`;

export const AboutContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 3rem 0;
  width: 100%;
  height: 100%;
  max-width: max-content;
  max-height: max-content;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const AboutImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  margin: 0 1rem;
  width: 40%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const AboutParaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  width: 50%;
  text-align: justify;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
