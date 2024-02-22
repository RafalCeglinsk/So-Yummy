import React from "react";
import { Link } from "react-router-dom";

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
        <Link to="/categories/breakfast">
        <LinkRecipies>
          See recepies
          <RenderArrow />
        </LinkRecipies>
        </Link>
      </TextContainer>
      <ArrowStyle>
        <ArrowHeroMain />
      </ArrowStyle>
    </SaladContainer>
  );
}
