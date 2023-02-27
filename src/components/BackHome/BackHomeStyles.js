import styled from "styled-components";

export const BackHomeMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  border-bottom: 1px solid #ffffff;
  background: #ff7400;
  color: #ffffff;
  font-size: 14px;
`;

export const BackHomeP = styled.span`
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
