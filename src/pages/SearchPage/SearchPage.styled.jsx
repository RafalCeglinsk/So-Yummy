import styled from "styled-components";

const SearchPageStyled = styled.div`

  margin: 0 auto;

  width: 100%;
display: flex;
flex-direction: column;



  @media (min-width: 480px) {
    width: 480px;
  }

  @media (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1440px) {
    width: 1280px;
  }
`;


const NoResults = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 20px;
  max-width: 400px;
  color: var(--color-text-1);
  gap:16px;
  margin: 0 auto;
`

export { SearchPageStyled, NoResults };
