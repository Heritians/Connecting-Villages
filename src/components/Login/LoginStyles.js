import styled from "styled-components";

export const LoginContainer = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const LoginWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    max-width: 300px;
  }
`;

export const LoginTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginTitleSpan = styled.h1`
  font-size: 2.7rem;
  color: #ff7400;
  font-weight: 500;
  margin: 0 0 1rem 0;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LoginInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 1rem;
  box-shadow: none;
  font-size: 0.9rem;
  transition: 0.3s;
  color: #000000;
  border: 0;
  border-bottom: #ff7400 solid 1px;
  background-color: #ffffff;
  &:focus {
    outline: none !important;
    outline-offset: 0 !important;
    outline-style: none !important;
    outline-width: 0 !important;
    border-bottom: 1px solid #231bbc;
    background-color: #ffffff;
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
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const InputsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LoginLabel = styled.label`
  font-size: 1.2rem;
  color: #000000;
  font-weight: 400;
  margin: 0 0 0.5rem 0;
  width: max-content;
  @media screen and (max-width: 768px) {
    margin: 0;
    font-size: 1rem;
  }
`;

export const LoginSelect = styled.select`
  width: 100%;
  padding: 0 0.5rem;
  border-radius: 1rem;
  box-shadow: none;
  font-size: 1.1rem;
  transition: 0.3s;
  color: #000000;
  border: 0;
  border-bottom: #ff7400 solid 1px;
  background-color: #ffffff;
  &:focus {
    outline: none !important;
    outline-offset: 0 !important;
    outline-style: none !important;
    outline-width: 0 !important;
    border-bottom: 1px solid #231bbc;
    background-color: #ffffff;
  }
  &:disabled {
    color: #000000;
    opacity: 0.5;
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
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const LoginOption = styled.option`
  font-size: 1rem;
  color: #000000;
`;

export const CheckBoxRow = styled.div`
  margin-top: 0.7rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%;
`;

export const LoginCheckbox = styled.input`
  width: 1rem;
  height: 1rem;
  padding: 0.5rem;
  margin: 0.5rem 0.5rem 0.5rem 0;
  border-radius: 1rem;
  box-shadow: none;
  font-size: 1.1rem;
  transition: 0.3s;
`;

export const LoginSubmit = styled.button`
  margin-top: 0.5rem;
  background: #ff7400;
  border: 0;
  padding: 0.5rem 1rem;
  color: #ffffff;
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
  }
`;

export const MessageSentAlert = styled.div`
  text-align: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #6eca46;
  color: #000000;
  border-radius: 0.5rem;
  display: none;
  margin: 0.5rem 0;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
