import styled from "styled-components";

export const NoPageContainer = styled.div`
  margin-top: 1.9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NoPageTitle = styled.h1`
  margin-top: 2rem;
  font-size: 8rem;
  font-weight: 600;
  color: #000;
`;

export const NoPageSubTitle = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  color: #000;
`;

export const NoPagePara = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  color: #231bbc;
`;

export const BackHomeButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const GoBackHome = styled.span`
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
`;
