import styled from "styled-components";

export const SectionTitleArea = styled.div`
  text-align: center;
  margin-top: 1rem;
  padding-bottom: 1rem 0;
`;

export const SectionTitle = styled.h2`
  margin-top: 1.5rem;
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
  padding-bottom: 0.5rem;
  color: #ff7400;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 6rem;
    height: 0.1rem;
    background: #000000;
    bottom: 0;
    left: calc(50% - 3rem);
  }
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 3rem;
    height: 0.1rem;
    background: #ff7400;
    bottom: 0;
    left: calc(50% - 1.5rem);
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SectionTitlePara = styled.p`
  font-family: "Open Sans Source Sans Pro", sans-serif;
  font-size: 1.5rem;
  margin-top: 1rem;
`;
