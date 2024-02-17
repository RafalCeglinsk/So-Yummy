import React from "react";
import AddRecipeForm from "./AddRecipeForm/AddRecipeForm";
import PopularRecipe from "./PopularRecipe/PopularRecipe";

const AddRecipePage = () => {
  return (
    <div>
      <h1 style={{ marginBottom: "72px" }}>Add Recipe</h1>
      <AddRecipeForm></AddRecipeForm>
      <PopularRecipe></PopularRecipe>
    </div>
  );
};

export default AddRecipePage;
