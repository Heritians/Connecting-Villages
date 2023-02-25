import styled from "styled-components";

export const InfoBox = styled.div`
  padding: 1rem;
  width: 100%;
`;

export const InfoBoxTitle = styled.h3`
  font-size: 1.8rem;
  color: #000000;
  font-weight: 600;
  margin: 0.5rem 0 0.5rem 68px;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const InfoBoxIcon = styled.i`
  font-size: 1.5rem;
  border-radius: 50%;
  padding: 1rem;
  float: left;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const InfoBoxPara = styled.p`
  padding-top: 0.3rem;
  color: #000000;
  line-height: 1.5rem;
  font-size: 1rem;
  margin: 0 0 0 68px;
`;

export const SocialLinksArea = styled.div`
  display: flex;
`;

export const SocialLinks = styled.a`
  font-size: 2rem;
  padding: 0.5rem;
  margin: 0.2rem;
  display: inline-block;
  color: #000000;
  line-height: 1;
  text-align: center;
  width: 2rem;
  height: 2rem;
  transition: 0.3s;
  &:hover {
    color: #ff7400;
    text-decoration: none;
`;

export const ContactForm = styled.form`
  padding: 1.5rem;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  border-radius: 0;
  box-shadow: none;
  font-size: 0.9rem;
  transition: 0.3s;
  color: #000000;
  border: 0;
  border-radius: 0.5rem;
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
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border-radius: 0;
  box-shadow: none;
  font-size: 0.9rem;
  transition: 0.3s;
  color: #000000;
  border: 0;
  border-radius: 0.5rem;
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
`;

export const FormButton = styled.button`
  margin-top: 2rem;
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
`;

export const MessageSentAlert = styled.div`
  text-align: center;
  padding: 10px;
  font-size: 0.8rem;
  background-color: #ff7400;
  color: #000000;
  border-radius: 0.5rem;
  display: none;
`;
