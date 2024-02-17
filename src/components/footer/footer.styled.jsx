import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 20px;
`;

export const Column = styled.div`
  flex: 1;
  max-width: 300px;
`;

export const CopyrightText = styled.p`
  text-align: center;
  margin-top: 20px;
  color: #FAFAFA;
  font-weight: 500;
  font-size: 14px;
`;

export const StyledFooter = styled.footer`
  background-color: #22252A;
  padding: 20px;
`;

export const SoYummyHeading = styled.h1`
  color: #FAFAFA;
  font-size: 28px;
  font-weight: 700;
  padding-bottom: 40px;
`;

export const FeaturesList = styled.ul`
  max-width: 418px;
  color: #FAFAFA;
  font-size: 18px;
  font-weight: 400;
`;

export const FeatureListItem = styled.li`
  color: #FAFAFA;
  font-size: 18px;
  padding-bottom: 12px;
`;