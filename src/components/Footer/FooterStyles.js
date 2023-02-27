import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 1rem 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #ff7400;
  height: max-content;
`;

export const BackHome = styled.span`
  margin: 0.4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #231bbc;
  color: #ffffff;
  white-space: nowrap;
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: max-content;
  &:hover {
    cursor: pointer;
  }
`;

export const LogoLocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: max-content;
`;

export const HeritiansLogo = styled.p`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 600;
  align-items: center;
  display: flex;
  flex-direction: row;
  width: max-content;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LocationParaName = styled.p`
  width: max-content;
  color: #ffffff;
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
export const LocationPara = styled.p`
  width: max-content;
  color: #ffffffcc;
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const QuickLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: max-content;
`;
export const LinksTitle = styled.h1`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 400;
  width: max-content;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const QuickLinks = styled.ul`
  padding: 0.8rem 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: max-content;
`;

export const QuickLinksItem = styled.span`
  color: #ffffff;
  padding: 0.3rem;
  font-size: 1rem;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  width: max-content;
  &:hover {
    color: #231bbc;
    transition: all 0.2s ease-in-out;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.2rem;
  }
`;

export const CopyrightMain = styled.div`
  border-top: 1px solid #ffffff;
  background: #ff7400;
  padding: 0 0 0.5rem 0;
  color: #ffffff;
  font-size: 1rem;
`;

export const Copyright = styled.div`
  text-align: center;
  padding-top: 0.5rem;
`;
