import React, { useState } from "react";
import {
  Form,
  SubmitButton,
  Main,
  Right,
  Left,
  Container,
  StyledH1,
  StyledH2,
  FollowUs,
} from "./styles";
import { RecipeDescriptionFields } from "../RecipeDescriptionFields/RecipeDescriptionFields";
import RecipePreparationFields from "../RecipePreparationFields/RecipePreparationFields";
import RecipeIngredientsFields from "../RecipeIngredientsFields/RecipeIngredientsFields";
import PopularRecipe from "../PopularRecipe/PopularRecipe";
import { SocialMediaBar } from "../../SocialMediaBar/SocialMediaBar";
import axios from "axios";

const AddRecipeForm = () => {
  const [recipeData, setRecipeData] = useState({
    title: "",
    category: "",
    description: "",
    time: "",
    ingredients: [],
    instructions: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(recipeData);
    if (!recipeData.title || recipeData.title.trim() === "") {
      alert("Title is required.");
      return; // Przerwij funkcję, jeśli walidacja nie przejdzie
    }
    const recipeToSubmit = {
      title: recipeData.title,
      category: recipeData.category,
      description: recipeData.description,
      time: recipeData.time,
      ingredients: recipeData.ingredients,
      instructions: recipeData.instructions,
    };
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDY3NDBkYzkyODMxZmZmMWJhNGMzNCIsImlhdCI6MTcwODYzNTc4NCwiZXhwIjoxNzA5MjQwNTg0fQ.i9oD7B3oVB4--kYun2EZKc2zzk-NYYnFdjajELZID2c";
    console.log("Przesłane dane przepisu:", recipeData);

    try {
      const response = await axios.post(
        "http://localhost:5001/api/ownRecipes",
        recipeToSubmit,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Przepis dodany:", response.data);
      // Tutaj możesz przekierować użytkownika lub wyświetlić komunikat o sukcesie
    } catch (error) {
      console.error(
        "Błąd przy dodawaniu przepisu:",
        error.response ? error.response.data : error
      );
      // Obsługa błędu, np. wyświetlenie informacji o błędzie użytkownikowi
    }
  };

  return (
    <Container>
      <Main>
        <Form onSubmit={handleSubmit}>
          <Left>
            <StyledH1>Add Recipe</StyledH1>
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
          </Left>
        </Form>

        <Right>
          <FollowUs>
            <StyledH2>Follow Us</StyledH2>
            <SocialMediaBar />
          </FollowUs>
          {/* <PopularRecipe></PopularRecipe> */}
        </Right>
      </Main>
    </Container>
  );
};

export default AddRecipeForm;
