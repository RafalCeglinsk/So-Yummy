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
import RecipeDescriptionFields from "../RecipeDescriptionFields/RecipeDescriptionFields";
import RecipeIngredientsFields from "../RecipeIngredientsFields/RecipeIngredientsFields";
import RecipePreparationFields from "../RecipePreparationFields/RecipePreparationFields";
import PopularRecipe from "../PopularRecipe/PopularRecipe";
import { SocialMediaBar } from "../../SocialMediaBar/SocialMediaBar";

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
          <PopularRecipe></PopularRecipe>
        </Right>
      </Main>
    </Container>
  );
};

export default AddRecipeForm;
