import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
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
import Notiflix from "notiflix";

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

  const requiredFields = [
    "title",
    "category",
    "description",
    "time",
    "ingredients",
    "instructions",
  ];

  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isFormValid = true;

    requiredFields.forEach((field) => {
      if (field === "ingredients" && recipeData[field].length === 0) {
        Notiflix.Notify.failure("Proszę dodać co najmniej jeden składnik.");
        isFormValid = false;
      } else if (!recipeData[field] || !recipeData[field].toString().trim()) {
        Notiflix.Notify.failure(`Pole ${field} jest wymagane.`);
        isFormValid = false;
      }
    });

    if (!recipeData.recipeImg) {
      Notiflix.Notify.failure("Zdjęcie przepisu jest wymagane.");
      isFormValid = false;
    }

    if (!isFormValid) return;

    const formData = new FormData();
    formData.append("title", recipeData.title);
    formData.append("category", recipeData.category);
    formData.append("description", recipeData.description);
    formData.append("time", recipeData.time);
    recipeData.ingredients.forEach((ingredient, index) => {
      formData.append(`ingredients[${index}][name]`, ingredient.name);
      formData.append(`ingredients[${index}][measure]`, ingredient.measure);
    });
    formData.append("instructions", recipeData.instructions);
    if (recipeData.recipeImg) {
      formData.append("recipeImg", recipeData.recipeImg);
    }
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDY3NDBkYzkyODMxZmZmMWJhNGMzNCIsImlhdCI6MTcwODg3MTY5MiwiZXhwIjoxNzA5NDc2NDkyfQ.F8VEWnfV7mPfYRDHlpOzRl1JUf-lqVgsUKydX_NGmew";
    console.log("Przesłane dane przepisu:", recipeData);

    try {
      const response = await axios.post(
        "http://localhost:5001/api/ownRecipes",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Przepis dodany:", response.data);
      Notiflix.Notify.success("Przepis został dodany pomyślnie!");
      console.log("Przesyłane dane przepisu:", recipeData);
      // navigate("/myRecipesPage");
    } catch (error) {
      console.error(
        "Błąd przy dodawaniu przepisu:",
        error.response ? error.response.data : error
      );
      Notiflix.Notify.failure("Nie udało się dodać przepisu.");
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
          <PopularRecipe></PopularRecipe>
        </Right>
      </Main>
    </Container>
  );
};

export default AddRecipeForm;
