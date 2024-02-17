import React, { useState } from "react";
import { Form, SubmitButton } from "./styles"; // Import stylizowanych komponentów
import RecipeDescriptionFields from "../RecipeDescriptionFields/RecipeDescriptionFields";
import RecipeIngredientsFields from "../RecipeIngredientsFields/RecipeIngredientsFields";
import RecipePreparationFields from "../RecipePreparationFields/RecipePreparationFields";

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
    <Form onSubmit={handleSubmit}>
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
      <SubmitButton type="submit">Add</SubmitButton>
    </Form>
  );
};

export default AddRecipeForm;
