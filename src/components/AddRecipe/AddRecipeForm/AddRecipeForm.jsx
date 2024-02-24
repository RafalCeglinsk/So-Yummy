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
// import PopularRecipe from "../PopularRecipe/PopularRecipe";
import { SocialMediaBar } from "../../SocialMediaBar/SocialMediaBar";
import axios from "axios";

const AddRecipeForm = () => {
  const [recipeData, setRecipeData] = useState({
    recipeImg: null,
    title: "",
    category: "",
    description: "",
    time: "",
    ingredients: [],
    instructions: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", recipeData.title);
    formData.append("category", recipeData.category);
    formData.append("description", recipeData.description);
    formData.append("time", recipeData.time);
    // Dodawanie składników jako oddzielnych pól
    recipeData.ingredients.forEach((ingredient, index) => {
      formData.append(`ingredients[${index}][name]`, ingredient.name);
      formData.append(`ingredients[${index}][amount]`, ingredient.amount);
      // Dodaj więcej pól dla składnika, jeśli jest to konieczne
    });
    formData.append("instructions", recipeData.instructions);
    console.log(recipeData.recipeImg);
    if (recipeData.recipeImg) {
      console.log(recipeData.recipeImg);
      formData.append("recipeImg", recipeData.recipeImg);
    }
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDY3NDBkYzkyODMxZmZmMWJhNGMzNCIsImlhdCI6MTcwODYzNTc4NCwiZXhwIjoxNzA5MjQwNTg0fQ.i9oD7B3oVB4--kYun2EZKc2zzk-NYYnFdjajELZID2c";
    console.log("Przesłane dane przepisu:", recipeData);

    try {
      const response = await axios.post(
        "http://localhost:5001/api/ownRecipes",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Przepis dodany:", response.data);
      console.log("Przesyłane dane przepisu:", recipeData);

      // Tutaj logika po pomyślnym dodaniu przepisu
    } catch (error) {
      console.error(
        "Błąd przy dodawaniu przepisu:",
        error.response ? error.response.data : error
      );
      // Obsługa błędu
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
