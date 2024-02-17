import React from 'react';
import { Nav } from './navigation/nav';
import { FollowUs } from './social_media/followUs';
import { SubscribeForm } from './subscribe_form/subscribeForm';
import {
  StyledFooter,
  FooterContainer,
  Column,
  CopyrightText,
  SoYummyHeading,
  FeaturesList,
  FeatureListItem,
} from './footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <Column>
          <SoYummyHeading>So Yummy</SoYummyHeading>
          <FeaturesList>
            <FeatureListItem>Baza przepisów, którą można uzupełniać</FeatureListItem>
            <FeatureListItem>Elastyczne wyszukiwanie pożądanych i niechcianych składników</FeatureListItem>
            <FeatureListItem>Możliwość dodawania własnych przepisów z zdjęciami</FeatureListItem>
            <FeatureListItem>Wygodne i łatwe w użyciu</FeatureListItem>
          </FeaturesList>
        </Column>

        <Column>
          <Nav />
          <FollowUs />
        </Column>

        <Column>
          <h3>Zapisz się do naszego biuletynu</h3>
          <p>Zapisz się do naszego biuletynu. Bądź na bieżąco z najnowszymi informacjami i ofertami specjalnymi, itp.</p>
          <SubscribeForm />
        </Column>
      </FooterContainer>

      <CopyrightText>© 2023 Wszelkie prawa zastrzeżone. Regulamin</CopyrightText>
    </StyledFooter>
  );
};

export default Footer;