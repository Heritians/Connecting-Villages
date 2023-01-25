import styled from 'styled-components';

// Styling file for footer.js



export const Container = styled.div`
  padding: 5px 80px !important;
  background: #23188C !important;

  @media (max-width: 1000px) {
    padding: 70px 30px !important;
  }
`;

export const Wrapper = styled.div`
    display: flex !important;
    flex-direction: column !important;
    justify-content: right !important;
    max-width: 100% !important;
    margin: 0 auto !important;
`

export const Column = styled.div`
  display: flex !important;
  flex-direction: column !important;
  text-align: left !important;
  margin-left: 10px !important;
  padding-top : 3% !important;
  padding-bottom : 2% !important;
  width: 50% !important;
`;

export const Row = styled.div`
  display: flex !important;
  flex-direction : row !important;
  justify-content : space-between !important;
  
  @media (max-width: 960px) {
    
  }
`;

export const Link = styled.a`
  color: #fff !important;
  margin-bottom: 10px !important;
  font-size: 12px !important;
  text-decoration: none !important;

  &:hover {
      color: #ff9c00 !important;
      transition: 200ms ease-in !important;
  }
`;

export const Title = styled.p`
  font-size: 22px !important;
  color: #fff !important;
  margin-bottom: 25px !important;
  font-weight: bold !important;
`;