import React from 'react';
import { Nav } from './navigation/nav';
import { FollowUs } from './social_media/followUs';
import { SubscribeForm } from './subscribe_form/subscribeForm';
import { StartLogoSmall } from '../RenderSvg/RenderSvg';
import {
  StyledFooter,
  FooterContainer,
  Column,
  CopyrightText,
  SoYummyHeading,
  FeaturesList,
  FeatureListItem,
  SubscribeHeading,
  SubscribeText,
} from './footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <Column>
          <SoYummyHeading><StartLogoSmall />So Yummy</SoYummyHeading>
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
          <SubscribeHeading>Zapisz się do naszego biuletynu</SubscribeHeading>
          <SubscribeText>Zapisz się do naszego biuletynu. Bądź na bieżąco z najnowszymi informacjami i ofertami specjalnymi, itp.</SubscribeText>
          <SubscribeForm />
        </Column>
      </FooterContainer>

      <CopyrightText>© 2023 Wszelkie prawa zastrzeżone. <p className="regulations">Regulamin</p></CopyrightText>
    </StyledFooter>
  );
};

export default Footer;