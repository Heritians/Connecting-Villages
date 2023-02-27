import styled from "styled-components";

export const LogoRow = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  height: 6rem;
  width: 100%;
  background: #ffffff;
  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const LogoContainer = styled.img`
  align-items: center;
  padding: 0.3rem;
  height: 4.5rem;
  width: auto;
  @media (max-width: 768px) {
    height: 2.5rem;
  }
`;

export const UBAContainer = styled.div`
  text-decoration: none;
  color: #000000;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: center;
  height: 4rem;
  width: auto;
  margin: 0.5rem 0 0 -5rem;
  &:hover {
    color: #000000;
    text-decoration: none;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    height: 2.5rem;
    margin: 0.2rem 0 0 -1.2rem;
  }
`;

export const UBATitleHindi = styled.h1`
  align-items: center;
  width: max-content;
  font-size: 1.2rem;
  font-weight: 500;
  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
    font-size: 0.7rem;
  }
`;

export const UBATitleEnglish = styled.h1`
  align-items: center;
  width: max-content;
  font-size: 1.2rem;
  font-weight: 800;
  color: #ff7400;
  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
    font-size: 0.75rem;
  }
`;

export const UBAPara = styled.p`
  align-items: center;
  width: max-content;
  font-size: 0.9rem;
  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
    font-size: 0.45rem;
  }
`;

// #ff9944
