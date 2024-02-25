import styled from "styled-components";
import spinachFooterLeft from "../../images/Footer/spinach-footer-left.jpg";
import spinachFooterRight from "../../images/Footer/spinach-footer-right.jpg";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-left: 20px;
  padding-top: 64px;
  padding-right: 100px;
  background-color: #22252a;

  @media screen and (max-width: 1024px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  padding-right: 20px;
  background-color: #22252a;
  min-height: 500px;

  @media screen and (min-width: 768px) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Column = styled.div`
  flex: 1;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 339px;
  }
`;

export const CopyrightText = styled.p`
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
  color: #22252a;
  font-weight: 500;
  font-size: 14px;
  opacity: 50%;
  display: flex;
  justify-content: center;
  p.regulations {
    margin-left: 40px;
  }
  p.regulations {
    margin-left: 0;
    margin-top: 10px;
  }

  @media screen and (min-width: 768px) {
    p.regulations {
      margin-left: 40px;
      margin-top: 0;
    }
  }
`;

export const StyledFooter = styled.footer`
  background-image: url(${spinachFooterLeft}), url(${spinachFooterRight});
  background-position: left top, right bottom;
  background-repeat: no-repeat, no-repeat;
  margin-top: 150px;
  padding-top: 500px;
  @media screen and (max-width: 1024px) {
    padding-top: 400px;
  }

  @media screen and (max-width: 768px) {
    padding-top: 300px;
  }
  @media screen and (min-width: 768px) {
    padding-top: 500px;
  }
  @media screen and (min-width: 768px) {
    padding-top: 500px;
  }
`;

export const SoYummyHeading = styled.h1`
  color: #FAFAFA;
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 40px;
  display: flex;
  align-items: center;
  svg {
    margin-right: 8px;
    height: 1.5em; 
  padding-bottom: 20px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
    height: 1.2em;
  padding-bottom: 20px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
    height: 1.2em;
    width: auto;
    margin-right: 8px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 24px;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding-bottom: 10px;
  }
  @media screen and (min-width: 768px) {
    font-size: 28px;
    padding-bottom: 40px;
    svg {
      height: 1.5em;
    }
  }
  @media screen and (max-width: 767px) {
    position: relative;
    top: 28px;
  }
`;

export const FeaturesList = styled.ul`
  max-width: 100%;
  color: #fafafa;
  font-size: 16px;
  font-weight: 400;
  list-style: disc;
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    max-width: 418px;
    font-size: 18px;
  }
`;

export const FeatureListItem = styled.li`
  color: #fafafa;
  font-size: 18px;
  padding-bottom: 12px;

  @media screen and (max-width: 1024px) {
    text-align: center;
    font-size: 16px;
    padding-bottom: 10px;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding-bottom: 12px;
  }
`;

export const SubscribeHeading = styled.h3`
  color: #fafafa;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
  display: none;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 14px;
    display: block;
  }

  @media screen and (max-width: 1199px) {
    display: none;
  }
`;

export const SubscribeText = styled.p`
  color: #fafafa;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 20px;
`;
