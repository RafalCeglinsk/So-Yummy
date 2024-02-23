import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import RecipesList from "../RecipesList/RecipesList.jsx";
import axios from "axios";

const SearchedRecipesList = () => {
  const [searchParams] = useSearchParams();
  const [recipes, setRecipes] = useState(null);
  const [error, setError] = useState(null);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const query = searchParams.get("query");
    const type = searchParams.get("type");

    if (!query || !type) {
      if (!isFirstLoad) {
        setError("Missing search parameters.");
      }
      setRecipes(null);
      return;
    } else {
      setIsFirstLoad(false);
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/recipes/search`, {
          params: { query, type },
        });
        setRecipes(response.data);
        setError(null);
      } catch (err) {
        setError("An error occurred while fetching the recipes.");
        setRecipes(null);
      }
    };

    fetchData();
  }, [searchParams, isFirstLoad]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!recipes) {
    return <div>No recipes found. Try a different search!</div>;
  }

  return <RecipesList recipes={recipes} />;
};

export default SearchedRecipesList;
