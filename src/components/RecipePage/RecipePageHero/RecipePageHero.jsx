import { AddButton } from "./button";
import {
  BackgroundSection,
  Header,
  HeaderDiv,
  RecipeDesc,
  TimeContainer,
  TimerP,
} from "./RecipePage.styled";
import { ReactComponent as ClockSVG } from "#images/RecipePage/clock.svg";

export const RecipePageHero = () => {
  return (
    <BackgroundSection>
      <HeaderDiv>
        <Header>Salmon Avocado Salad</Header>
        <RecipeDesc>
          Is a healthy salad recipe that’s big on nutrients and flavor. A moist,
          pan seared salmon is layered on top of spinach, avocado, tomatoes, and
          red onions. Then drizzled with a homemade lemon vinaigrette.
        </RecipeDesc>
      </HeaderDiv>
      <AddButton text="Add to favorite recipes" />
      <TimeContainer>
        <ClockSVG />
        <TimerP>20min</TimerP>
      </TimeContainer>
    </BackgroundSection>
  );
};
