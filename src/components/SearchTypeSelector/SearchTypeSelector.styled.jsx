import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-top: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchSpan = styled.span`
  font-family: "Poppins";
  font-style: normal;
  color: var(--color-text-1);
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
    margin-right: 18px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;
