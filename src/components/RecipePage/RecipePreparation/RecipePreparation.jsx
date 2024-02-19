import {
  Description,
  Placeholder,
  PreparationHeader,
  RecipeImage,
  RecipeWrapper,
  StyledLi,
  StyledOl,
  StyledListContainer,
} from "./RecipePreparation.styled";
import recipeData from "../recipes.json";
import React, { useEffect, useState } from "react";

export const RecipePreparation = () => {
  const [image, setImage] = useState("");
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    try {
      const recipeInstructions = recipeData[0].instructions;
      const recipeImage = recipeData[0].thumb || "url_do_obrazu_zastępczego";
      const steps = recipeInstructions.split("\r\n\r\n");
      setImage(recipeImage);
      setInstructions(steps);
    } catch (error) {
      console.error("Błąd:", error);
    }
  }, []);

  return (
    <RecipeWrapper>
      <Description>
        <PreparationHeader>Recipe Preparation</PreparationHeader>
        {instructions.length > 0 ? (
          <StyledOl>
            {instructions.map((step, index) => (
              <StyledListContainer key={index}>
                <StyledLi>
                  {step.split(";").map((subStep, subIndex) => (
                    <p key={subIndex}>{subStep}</p>
                  ))}
                </StyledLi>
              </StyledListContainer>
            ))}
          </StyledOl>
        ) : (
          <Placeholder>Brak instrukcji do wyświetlenia</Placeholder>
        )}
      </Description>
      <RecipeImage src={image} alt="Recipe" />
    </RecipeWrapper>
  );
};
