import React from 'react';

import { RenderArrow } from '../../RenderSvg/RenderSvg';
import { SaladContainer, TextContainer,LinkRecipies } from './ChooseYourBreakfast.styled.jsx';

export function ChooseYourBreakfast() {
  return (
    
<SaladContainer>   {' '}

<TextContainer>
        <span>Delicious and healthy</span> way to enjoy a variety of fresh
        ingredients in one satisfying meal.
        <LinkRecipies>
        See recepies
        <RenderArrow></RenderArrow>
        </LinkRecipies>


      </TextContainer>

</SaladContainer>
  );
}
