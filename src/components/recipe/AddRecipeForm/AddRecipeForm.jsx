import React, { useState } from "react";
import { Form, SubmitButton, Main } from "./styles"; // Import stylizowanych komponentów
import RecipeDescriptionFields from "../RecipeDescriptionFields/RecipeDescriptionFields";
import RecipeIngredientsFields from "../RecipeIngredientsFields/RecipeIngredientsFields";
import RecipePreparationFields from "../RecipePreparationFields/RecipePreparationFields";
import PopularRecipe from "../PopularRecipe/PopularRecipe";

const AddRecipeForm = () => {
  const [recipeData, setRecipeData] = useState({
    title: "",
    description: "",
    ingredients: [],
    preparation: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Przesłane dane przepisu:", recipeData);
    // Tutaj możesz dodać logikę do wysyłania danych do backendu
  };

  return (
    <Main>
      <Form onSubmit={handleSubmit}>
        <h1 style={{ marginBottom: "72px" }}>Add Recipe</h1>
        <RecipeDescriptionFields
          recipeData={recipeData}
          setRecipeData={setRecipeData}
        />
        <RecipeIngredientsFields
          recipeData={recipeData}
          setRecipeData={setRecipeData}
        />
        <RecipePreparationFields
          recipeData={recipeData}
          setRecipeData={setRecipeData}
        />
        <SubmitButton type="submit">Add recipe</SubmitButton>
      </Form>
      <PopularRecipe></PopularRecipe>
    </Main>
  );
};

export default AddRecipeForm;
