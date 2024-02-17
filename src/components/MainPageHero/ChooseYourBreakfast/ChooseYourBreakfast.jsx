import React from "react";

import { RenderArrow, ArrowHeroMain } from "../../RenderSvg/RenderSvg";
import {
  SaladContainer,
  TextContainer,
  LinkRecipies,
  ArrowStyle,
} from "./ChooseYourBreakfast.styled.jsx";

export function ChooseYourBreakfast() {
  return (
    <SaladContainer>
      {" "}
      <TextContainer>
        <span>Delicious and healthy</span> way to enjoy a variety of fresh
        ingredients in one satisfying meal.
        <LinkRecipies>
          See recepies
          <RenderArrow />
        </LinkRecipies>
      </TextContainer>
      <ArrowStyle>
        <ArrowHeroMain />
      </ArrowStyle>
    </SaladContainer>
  );
}
