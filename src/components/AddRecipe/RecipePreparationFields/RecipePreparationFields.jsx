import React from "react";
import {
  PreparationContainer,
  PreparationTitle,
  PreparationTextarea,
} from "./styles";

const RecipePreparationFields = ({ recipeData, setRecipeData }) => {
  const handleChange = (e) => {
    setRecipeData({ ...recipeData, instructions: e.target.value });
  };

  return (
    <PreparationContainer>
      <PreparationTitle>Recipe Preparation</PreparationTitle>
      <PreparationTextarea
        name="instructions"
        placeholder="Enter recipe"
        value={recipeData.instructions}
        onChange={handleChange}
      />
    </PreparationContainer>
  );
};

export default RecipePreparationFields;
