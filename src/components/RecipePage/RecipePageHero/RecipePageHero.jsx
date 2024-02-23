import { AddButton } from "./button";
import {
  BackgroundSection,
  Header,
  HeaderDiv,
  RecipeDesc,
  TimeContainer,
  TimerP,
} from "./RecipePage.styled";
import { Clock } from "../../RenderSvg/RenderSvg";

export const RecipePageHero = ({ recipe }) => {
  return (
    <BackgroundSection>
      <HeaderDiv>
        <Header>{recipe.title}</Header>
        <RecipeDesc>{recipe.description}</RecipeDesc>
        <AddButton text="Add to favorite recipes" />
      </HeaderDiv>
      <TimeContainer>
        <Clock />
        <TimerP>{recipe.time} min</TimerP>
      </TimeContainer>
    </BackgroundSection>
  );
};
