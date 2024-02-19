import styled from 'styled-components';
import spinachFooterLeft from '../../images/Footer/spinach-footer-left.jpg';
import spinachFooterRight from '../../images/Footer/spinach-footer-right.jpg';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-left: 100px;
  padding-top: 64px;
  padding-right: 100px;
  background-color: #22252A;
  
  @media screen and (max-width: 1024px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Column = styled.div`
  flex: 1;
  max-width: 339px;
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
  p.regulations {
    margin-left: 40px; 
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
`;

export const SoYummyHeading = styled.h1`
  color: #FAFAFA;
  font-size: 28px;
  font-weight: 700;
  padding-bottom: 40px;
  display: flex;
  align-items: center;
  svg {
    margin-right: 8px;
    height: 1.5em; 
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
`;

export const FeaturesList = styled.ul`
  max-width: 418px;
  color: #FAFAFA;
  font-size: 18px;
  font-weight: 400;
  list-style: disc;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const FeatureListItem = styled.li`
  color: #FAFAFA;
  font-size: 18px;
  padding-bottom: 12px;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`;

export const SubscribeHeading = styled.h3`
  color: #FAFAFA;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 14px;
`;

export const SubscribeText = styled.p`
  color: #FAFAFA;
  font-size: 14px;
  font-weight:400;
  margin-bottom: 20px;
`;