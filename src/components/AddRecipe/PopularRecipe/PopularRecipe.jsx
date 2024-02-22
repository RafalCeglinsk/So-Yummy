import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { PopularRecipeContainer } from "./styles";

const PopularRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("/api/popular-recipes");
        setRecipes(response.data);
      } catch (error) {
        setError("No popular recipes at the moment.");
      }
    };

    fetchRecipes();
  }, []);

  return (
    <PopularRecipeContainer>
      <h2>Popular recipe</h2>
      {recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>{error || "Loading..."}</p>
      )}
    </PopularRecipeContainer>
  );
};

export default PopularRecipe;
