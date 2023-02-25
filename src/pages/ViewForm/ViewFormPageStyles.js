import styled from "styled-components";

export const RequestSection = styled.div`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
`;

export const Input = styled.input`
  width: 75%;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease-in-out;
  &:focus {
    border: 1px solid #000;
  }
`;

export const Button = styled.button`
  width: 20%;
  margin: 1rem;
  border-radius: 0.5rem;
  background: #ff7400;
  color: #ffffff;
  white-space: nowrap;
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ff841d;
    color: #000000;
  }
`;

export const ButtonRow = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

export const PrintButton = styled.button`
  margin: 1rem;
  border-radius: 0.5rem;
  background: #ff7400;
  color: #ffffff;
  white-space: nowrap;
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ff841d;
    color: #000000;
  }
`;
