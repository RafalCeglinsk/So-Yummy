import React from "react";

import { SocialMediaBar } from "../SocialMediaBar/SocialMediaBar";
import { StartLogoSmall } from "../RenderSvg/RenderSvg";
import SubscribeForm from "./SubscribeForm/SubscribeForm";
import Nav from "../Nav/Nav";

import {
  FooterContent,
  FooterTextContainer,
  LogoWrapper,
  FooterText,
  FooterBarText,
  RightText,
} from "./footer.styled";

function Footer() {



  return (
    <>
      <FooterContent>
        <FooterTextContainer className="container">
          <div>
            <LogoWrapper>
              <StartLogoSmall/>
              <span>So Yummy</span>
            </LogoWrapper>
            <FooterText>
              <li>Database of recipes that can be replenished</li>
              <li>Flexible search for desired and unwanted ingredients</li>
              <li>Ability to add your own recipes with photos</li>
              <li>Convenient and easy to use</li>
            </FooterText>
          </div>
          <Nav />
          <SubscribeForm />
        </FooterTextContainer>
        <SocialMediaBar />
      </FooterContent>

      <FooterBarText>
        <span>© 2024 All Rights Reserved.</span>
        <RightText>Terms of Service</RightText>
      </FooterBarText>
    </>
  );
}

export default Footer;
