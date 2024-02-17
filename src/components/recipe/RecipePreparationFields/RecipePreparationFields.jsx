import React from "react";
import {
  PreparationContainer,
  PreparationTitle,
  PreparationTextarea,
} from "./styles"; // Załóżmy, że plik ze stylami nazywa się styles.js

const RecipePreparationFields = ({ recipeData, setRecipeData }) => {
  const handleChange = (e) => {
    setRecipeData({ ...recipeData, preparation: e.target.value });
  };

  return (
    <PreparationContainer>
      <PreparationTitle>
        <h2>Recipe Preparation</h2>
      </PreparationTitle>
      <PreparationTextarea
        name="preparation"
        placeholder="Enter recipe"
        value={recipeData.preparation}
        onChange={handleChange}
      />
    </PreparationContainer>
  );
};

export default RecipePreparationFields;
