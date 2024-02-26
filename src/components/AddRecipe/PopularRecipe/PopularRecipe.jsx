import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  PopularRecipeContainer,
  RecipeCard,
  RecipeImage,
  RecipeTitle,
  RecipeDescription,
  RecipeCardContainer,
  PopularRecipeTitle,
  RecipeInfo,
  StyledLink,
} from "./styles";

const PopularRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const baseUrl = process.env.REACT_APP_API_BASE_URL;
        const response = await axios.get(`${baseUrl}/popular`);
        setRecipes(response.data.recipes.recipes);
      } catch (error) {
        setError("No popular recipes at the moment.");
      }
    };

    fetchRecipes();
  }, []);

  return (
    <PopularRecipeContainer>
      <PopularRecipeTitle>Popular Recipes</PopularRecipeTitle>
      <RecipeCardContainer>
        {recipes.length > 0 ? (
          recipes.slice(0, 4).map((recipe, index) => (
            <RecipeCard key={recipe.title}>
              <StyledLink to={`/recipe/${encodeURIComponent(recipe.title)}`}>
                {/* content */}
                <RecipeImage src={recipe.thumb} alt={recipe.title} />
                <RecipeInfo>
                  <RecipeTitle>{recipe.title}</RecipeTitle>
                  <RecipeDescription>
                    {recipe.description.length > 100
                      ? recipe.description.substring(0, 100) + "..."
                      : recipe.description}
                  </RecipeDescription>
                </RecipeInfo>
              </StyledLink>
            </RecipeCard>
          ))
        ) : (
          <p>{error || "Loading..."}</p>
        )}
      </RecipeCardContainer>
    </PopularRecipeContainer>
  );
};

export default PopularRecipe;
