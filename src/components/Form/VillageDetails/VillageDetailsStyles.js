import styled from "styled-components";

export const DetailsRow = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem;
  width: 100%;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailLabel = styled.label`
  margin-right: 1rem;
  font-size: 1rem;
  font-weight: 550;
`;

export const DetailInput = styled.input`
  padding: 0.5rem;
  border: 0.5px solid #000000;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 550;
  &:focus {
    outline: none;
  }
`;
