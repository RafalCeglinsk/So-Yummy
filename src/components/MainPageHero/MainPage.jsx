import React from "react";

import { ChooseYourBreakfast } from "./ChooseYourBreakfast/ChooseYourBreakfast";
import { HeroWrapper, MainTitle, TextContent,TitleWrapper ,SbTabletStyle} from "./MainPage.styled";
import SearchBar from "../SearchBar/SearchBar";
export function MainPage() {
  return (
    <>
    <HeroWrapper>
      {" "}

<TitleWrapper>
      <MainTitle>
        {" "}
        <span>SO</span>Yummy{" "}
      </MainTitle>
      <TextContent>
        {" "}
        What to cook?" is not only a recipe app, it is, in fact, your cookbook.
        You can add your own recipes to save them for the future.{" "}
      </TextContent>
      <SbTabletStyle>
      <SearchBar />
      </SbTabletStyle>
      </TitleWrapper>
      
      <ChooseYourBreakfast/>

      </HeroWrapper>


   
  
    </>
  );
}
