import styled from "styled-components";

export const Button = styled.div`
  position: fixed;
  right: 1.5rem;
  bottom: 3rem;
  font-size: 2rem;
  z-index: 1;
  cursor: pointer;
  color: #ffffff;
`;

export const ScrollButton = styled.i`
  background-color: #231bbc;
  border-radius: 10px;
  height: 3rem;
  width: 3rem;
  color: #ffffff;
  font-size: 2.5rem;
  line-height: auto;
  text-align: center;
  display: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ffffff;
    background-color: #0400ff;
  }
`;
