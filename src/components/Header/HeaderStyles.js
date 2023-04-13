import styled from "styled-components";

export const HeaderMain = styled.div`
  background: #ffffff;
  height: 5.1rem;
`;

export const HeaderContainer = styled.div`
  top: 0;
  width: 100%;
  position: fixed;
  opacity: 1;
  z-index: 2;
  background: #ffffff;
  transition: 0.3s ease-in-out;
`;

export const NavRow = styled.div`
  background: #ffffff;
  flex-direction: row;
  display: flex;
  justify-content: center;
  padding: 0 3rem;
`;

//Logo
export const LogoContainer = styled.div`
  align-items: center;
  padding: 0.3rem 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  width: max-content;
  @media only screen and (max-width: 767px) {
    margin-left: 10px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    margin-left: 45px;
  }
  @media only screen and (min-width: 1024px) {
    margin-left: 40px;
  }
`;

export const NavLogo = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row;
  text-align: center;
  font-size: 2rem;
  text-decoration: none;
  padding: 0.3rem 0;
`;

export const NavLogoImg = styled.img`
  height: 3rem;
  text-align: center;
  padding: 0.3rem 0;
`;

export const NavLogoSpan = styled.span`
  color: #ff7400;
`;
export const NavLogoSpan2 = styled.span`
  color: #231bbc;
`;

//Nav
export const NavContainer = styled.div`
  padding: 0.3rem 0;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  list-style: none;
  text-align: center;
  width: max-content;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  flex-direction: row;
  list-style: none;
  text-align: center;
  @media only screen and (max-width: 767px) {
    display: block;
    text-align: center;
    justify-content: center;
  }
`;

export const NavItem = styled.ul`
  text-decoration: none;
  margin: 0 0.5rem;
  padding: 0.5rem 0;
  color: #231bbc;
  display: flex;
  justify-content: center;
  margin: 0 1rem;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    color: #ff9944;
    transition: all 0.2s ease-in-out;
  }
  @media only screen and (max-width: 767px) {
    display: block;
    justify-content: center;
    text-align: center;
  }
`;

export const NavHamburgerBtn = styled.button`
  border: none;
  box-shadow: none !important;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const NavLinks = styled.div`
  padding: 0.5rem 1rem;
  color: #231bbc;
  display: block;
  justify-content: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #ff7400;
    transition: all 0.2s ease-in-out;
  }
`;

export const NavLoginBtn = styled.button`
  border-radius: 10px;
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
