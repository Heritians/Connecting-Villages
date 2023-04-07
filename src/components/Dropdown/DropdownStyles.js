import styled from "styled-components";

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: max-content;
  position: fixed;
  top: 3rem;
  right: 9rem;
  z-index: 1;
  background: rgba(255, 255, 255, 1);
  transition: 0.3s ease-in-out;
  border-radius: 0.5rem;
  border: 1px solid black;
  @media (max-width: 768px) {
    top: 270px;
    right: 40px;
  },
`;

export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: max-content;
`;

export const DropdownItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: max-content;
  padding: 0.4rem 0.6rem;
  color: #231bbc;
  margin: 0.5rem 0;
  border-radius: 0.5rem;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #ff7400;
    transition: 0.3s ease-in-out;
  }
`;
