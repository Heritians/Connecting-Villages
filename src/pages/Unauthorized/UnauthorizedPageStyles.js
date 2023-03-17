import styled from "styled-components";

export const UnauthorizedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  height: 35vh;
`;

export const UnauthorizedTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 1rem;
  color: red;
  text-transform: uppercase;
`;

export const UnauthorizedText = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1rem;
`;

export const UnauthorizedButton = styled.span`
  width: max-content;
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
`;
