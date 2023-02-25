import styled from "styled-components";

export const MakeContributionContainer = styled.div`
  padding: 1rem 0;
  margin: 2rem 0;
  width: 100%;
  height: auto;
  min-height: 15vh;
  background-color: #ff7400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MakeContributionPara = styled.div`
  font-size: 2rem;
  width: max-content;
  color: #ffffff;
  margin-right: 3rem;
  @media (max-width: 768px) {
    margin: 1rem;
    font-size: 1.5rem;
  }
`;

export const MakeContributionButton = styled.div`
  font-size: 1.2rem;
  width: max-content;
  color: #ffffff;
  background-color: #231bbc;
  padding: 0.5rem 0.7rem;
  border-radius: 1rem;
  margin-left: 3rem;
  &:hover {
    background-color: #0400ff;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin: 0 2rem;
    font-size: 1rem;
  }
`;
