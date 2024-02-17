import React from "react";

import { ChooseYourBreakfast } from "./ChooseYourBreakfast/ChooseYourBreakfast";
import { HeroWrapper, MainTitle, TextContent,TitleWrapper ,SbStyle} from "./MainPage.styled";
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

      </TitleWrapper>
      
      <ChooseYourBreakfast/>

      </HeroWrapper>


   
  
    </>
  );
}
