import React from 'react';

import { ChooseYourBreakfast } from './ChooseYourBreakfast/ChooseYourBreakfast';
import {
  MainWrapper,
  HeroWrapper,
  MainTitle,
  TextContent,
} from './MainPage.styled';

export function MainPage() {
  return (
    <MainWrapper>
      <HeroWrapper>
        {' '}
        <MainTitle>
          {' '}
          <span>SO</span>Yummy{' '}
        </MainTitle>
        <TextContent>
          {' '}
          What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.{' '}
        </TextContent>
      </HeroWrapper>
      <ChooseYourBreakfast></ChooseYourBreakfast>
    </MainWrapper>
  );
}
