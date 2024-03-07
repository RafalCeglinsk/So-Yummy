import styled from "styled-components";

export const Title = styled.div`
  position: relative;
  padding-top: 65px;
  padding-bottom: 65px;

  @media screen and (min-width: 768px) {

    padding-top: 136px;
  }

  & h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 1;
    letter-spacing: -0.56px;
    padding-left: 16px;
    color:var(--color-text-1);
    @media screen and (min-width: 768px) {
      font-size: 32px;
      letter-spacing: -0.64px;
      padding-left: 32px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 44px;
      letter-spacing: -0.88px;
      padding-left: 120px;
    }
  }

  & svg:nth-child(2) {
    rotate: -25deg;
    left: 120px;
    top: 36px;
    position: absolute;
    width: 8px;
      height: 8px;
    @media screen and (min-width: 768px) {
      left: 120px;
      top: 86px;
      width: 12px;
      height: 12px;
    }
    @media screen and (min-width: 1440px) {
      left: 267px;
      top: 110px;
      width: 14px;
      height: 14px;
    }
  }
  & svg:nth-child(3) {
    position: absolute;
    right: 130px;
    top: 100px;
    width: 8px;
      height: 9px;
    @media screen and (min-width: 768px) {
      right: 290px;
      top: 180px;
      width: 12px;
      height: 12px;

    }
    @media screen and (min-width: 1440px) {
        right: 540px;
      top: 180px;
      width: 14px;
      height: 14px;
    }
  }
  & svg:nth-child(4) {
    position: absolute;
    right: 27px;
    top: 69px;
    width: 8px;
      height: 9px;

    @media screen and (min-width: 768px) {
      right: 67px;
      top: 130px;
      width: 12px;
      height: 12px;
    }
    @media screen and (min-width: 1440px) {
      right: 87px;
      top: 130px;
      width: 14px;
      height: 14px;
    }
  }
`;
