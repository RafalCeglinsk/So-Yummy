import styled from "styled-components";

const SearchPageStyled = styled.div`
  padding-top: 72px;
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

const TitleSearchPage = styled.h2`
  color: var(--color-text-1);
  font-weight: 600;
  font-size: 1;
  line-height: 28px;
  letter-spacing: -2%;
  margin-bottom: 50px;
  margin-top: 50px;

  @media screen and (min-width: 768px) {
    font-size: 32px;

    letter-spacing: -0.64px;
    margin-bottom: 40px;
    margin-top: 72px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 44px;

    letter-spacing: -0.88px;
    margin-top: 104px;
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

export { SearchPageStyled, TitleSearchPage, NoResults };
