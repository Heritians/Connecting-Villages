import styled from 'styled-components';

// Styling file for footer.js

export const Container = styled.div`
  padding: 5px 80px;
  background: #23188C;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: right;
    max-width: 100%;
    margin: 0 auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;
  padding-top : 3%;
  padding-bottom : 2%;
  width: 50%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction : row;
  justify-content : space-between;
  
  @media (max-width: 960px) {
    
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 12px;
  text-decoration: none;

  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 22px;
  color: #fff;
  margin-bottom: 25px;
  font-weight: bold;
`;