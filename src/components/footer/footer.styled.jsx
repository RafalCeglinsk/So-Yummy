import styled from 'styled-components';
import spinachFooterLeft from '../../images/Footer/spinach-footer-left.jpg';
import spinachFooterRight from '../../images/Footer/spinach-footer-right.jpg';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-left: 50px;
  padding-top: 64px;
  padding-right: 100px;
  background-color: #22252A;
  
  @media screen and (max-width: 1440px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  padding-right: 20px;
  background-color: #22252A;
  min-height: 500px;
  flex-direction: column;
    align-items: center;
  }
`;

export const Column = styled.div`
  flex: 1;
  max-width: 100%;

  @media screen and (max-width: 768px) {
    max-width: 339px;
  }
`;

export const CopyrightText = styled.p`
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
  color: #22252A;
  font-weight: 500;
  font-size: 14px;
  opacity: 50%;
  display: flex;
  justify-content: center;
`;

export const StyledFooter = styled.footer`
  background-image: url(${spinachFooterLeft}), url(${spinachFooterRight});
  background-position: left top, right bottom;
  background-repeat: no-repeat, no-repeat;
  margin-top: 150px;
  padding-top: 500px;

  @media screen and (max-width: 1440px) {
    padding-top: 400px;
  }

  @media screen and (max-width: 768px) {
    padding-top: 300px;
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
  }

  svg {
    margin-right: 8px;
    height: 1.2em;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  }

  svg {
    margin-right: 8px;
    height: 1.2em;
    width: auto;
    margin-right: 8px;
  }

  @media screen and (max-width: 1440px) {
    font-size: 28px;
    padding-bottom: 40px;
    svg {
      height: 1.5em;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding-bottom: 10px;
    position: relative;
    top: 28px;
  }
`;

export const FeaturesList = styled.ul`
  max-width: 100%;
  color: #FAFAFA;
  font-size: 16px;
  font-weight: 400;
  list-style: disc;

  @media screen and (max-width: 768px){

    display: none;
  }

  @media screen and (max-width: 1440px) {
    font-size: 18px;
    height: 102px;
    width: 380px;
  }
`;

export const FeatureListItem = styled.li`
  color: #FAFAFA;
  font-size: 18px;
  padding-bottom: 12px;

  @media screen and (max-width: 1440px) {
    text-align: center;
  font-size: 16px;
  padding-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SubscribeHeading = styled.h3`
  color: #FAFAFA;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;

  @media screen and (max-width: 1440px) {
  display: none;
  }
`;

export const SubscribeText = styled.p`
  color: #FAFAFA;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 20px;

  @media screen and (max-width: 1440px) {
   display: none;
  }
`;