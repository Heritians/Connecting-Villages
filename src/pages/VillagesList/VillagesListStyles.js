import styled from "styled-components";

export const VillagesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const VillagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const VillagesListItem = styled.span`
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
`;

export const VillagesListItemContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #fff;
  border: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  width: 40%;
  margin: 1rem;
`;

export const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40%;
  margin: 1rem;
`;

export const AddVillageButton = styled.button`
  background: #ff7400;
  color: #ffffff;
  border: none;
  font-size: 1rem;
  width: max-content;
  cursor: pointer;
  padding: 0.3rem 0.5rem;
  transition: 0.4s;
  border-radius: 0.7rem;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ff841d;
    color: #000000;
  }
  &:disabled {
    background: #ff7400;
    color: #ffffff;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const DeleteVillageButton = styled.button`
  background: #ef0000;
  color: #ffffff;
  border: none;
  font-size: 1rem;
  width: max-content;
  cursor: pointer;
  padding: 0.3rem 0.5rem;
  transition: 0.4s;
  border-radius: 0.7rem;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #e03a3a;
    color: #000000;
  }
  &:disabled {
    background: #ef0000;
    color: #ffffff;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const AddVillContainer = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  margin: 1rem;
`;

export const AddVillHeading = styled.h2`
  font-size: 1.5rem;
  margin: 0.5rem;
`;

export const AddVillInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin: 0.5rem;
`;

export const AddVillButton = styled.button`
  background: #ff7400;
  color: #ffffff;
  border: none;
  font-size: 1rem;
  width: max-content;
  cursor: pointer;
  padding: 0.3rem 0.5rem;
  transition: 0.4s;
  border-radius: 0.7rem;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ff841d;
    color: #000000;
  }
  &:disabled {
    background: #ff7400;
    color: #ffffff;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const AddVillCancel = styled.button`
  background: #ef0000;
  color: #ffffff;
  border: none;
  font-size: 1rem;
  width: max-content;
  cursor: pointer;
  padding: 0.3rem 0.5rem;
  transition: 0.4s;
  border-radius: 0.7rem;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #e03a3a;
    color: #000000;
  }
  &:disabled {
    background: #ef0000;
    color: #ffffff;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const AddVillButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0.5rem;
`;
