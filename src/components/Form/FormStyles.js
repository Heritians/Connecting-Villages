import styled from "styled-components";

export const SectionContainer = styled.div`
  margin: 1rem 0;
  width: 100%;
`;

export const SectionTitle = styled.h2`
  font-size: 1.7rem;
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const InputLabel = styled.label`
  font-size: 1rem;
  font-weight: 600;
  padding: 0 0.5rem;
`;

export const OutputLabel = styled.label`
  width: 100%;
  text-transform: capitalize;
  font-size: 1rem;
  padding: 0 0.5rem;
  background: #ffffff;
`;

export const Table = styled.table`
  width: 100%;
  border: 1.5px solid #000000;
  margin: 1rem 0;
`;

export const TableHeading = styled.th`
  font-size: 1rem;
  border: 1px solid #000000;
  align-items: center;
  text-align: center;
  padding: 0.2rem 0.4rem;
`;

export const TableRow = styled.tr`
  border: 1px solid #000000;
`;

export const TableData = styled.td`
  border: 1px solid #000000;
`;

export const Input = styled.input`
  padding: 0 0.5rem;
  width: 100%;
  height: 100%;
  box-shadow: none;
  font-size: 1rem;
  transition: 0.3s;
  color: #000000;
  border: 0;
  background-color: #ffffff;
  &:focus {
    outline: none !important;
    outline-offset: 0 !important;
    outline-style: none !important;
    outline-width: 0 !important;
    background-color: #ffffff;
  }
  &:disabled {
    background-color: #dfdfdf;
    opacity: 0.6;
  }
  &::-webkit-input-placeholder {
    color: #000000;
    opacity: 1;
  }
  &::-moz-placeholder {
    color: #000000;
    opacity: 1;
  }
  &::placeholder {
    color: #000000;
    opacity: 0.7;
  }
`;

export const InputTextArea = styled.textarea`
  padding: 0 0.5rem;
  width: 100%;
  box-shadow: none;
  font-size: 1rem;
  transition: 0.3s;
  color: #000000;
  border: 0;
  background-color: #ffffff;
  &:focus {
    outline: none !important;
    outline-offset: 0 !important;
    outline-style: none !important;
    outline-width: 0 !important;
    background-color: #ffffff;
  }
  &:disabled {
    background-color: #dfdfdf;
    opacity: 0.8;
  }
  &::-webkit-input-placeholder {
    color: #000000;
    opacity: 1;
  }
  &::-moz-placeholder {
    color: #000000;
    opacity: 1;
  }
  &::placeholder {
    color: #000000;
    opacity: 0.5;
  }
`;

export const InputSelect = styled.select`
  padding: 0 0.5rem;
  width: 100%;
  height: 100%;
  box-shadow: none;
  font-size: 1rem;
  transition: 0.3s;
  color: #000000;
  border: 0;
  background-color: #ffffff;
  &:focus {
    outline: none !important;
    outline-offset: 0 !important;
    outline-style: none !important;
    outline-width: 0 !important;
    background-color: #ffffff;
  }
  &:disabled {
    color: #000000;
    opacity: 0.8;
  }
  &::-webkit-input-placeholder {
    color: #000000;
    opacity: 1;
  }
  &::-moz-placeholder {
    color: #000000;
    opacity: 1;
  }
  &::placeholder {
    color: #000000;
    opacity: 0.5;
  }
`;

export const InputOption = styled.option``;

export const SubmitButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem 0;
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin: 1rem 0;
`;

export const RemoveRowButton = styled.button`
  margin: 0 0 0 1rem;
  border-radius: 0.5rem;
  color: #ff7400;
  padding: 0.4rem;
  background: #ffffff;
  white-space: nowrap;
  font-size: 1rem;
  outline: none;
  border: 0.5px solid #ff7400;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ff841d;
    color: #000000;
  }
`;

export const AddRowButton = styled.button`
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

export const SubmitButton = styled.button`
  margin: 1rem;
  border-radius: 1rem;
  background: #ff7400;
  color: #ffffff;
  white-space: nowrap;
  padding: 0.4rem 0.8rem;
  font-size: 1.5rem;
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
  &:disabled {
    background: #ff7400;
    color: #ffffff;
    opacity: 0.5;
    cursor: not-allowed;
`;

export const MessageSentAlert = styled.div`
  text-align: center;
  padding: 10px;
  font-size: 1.2rem;
  background-color: #6eca46;
  color: #000000;
  border-radius: 0.5rem;
  display: none;
`;
