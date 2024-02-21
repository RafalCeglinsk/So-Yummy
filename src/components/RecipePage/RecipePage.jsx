import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipeId } from "../../api/getRecipeId";
import { RecipePageHero } from "./RecipePageHero/RecipePageHero";
import { RecipePreparation } from "./RecipePreparation/RecipePreparation";
import { RecipeIngredientsList } from "./RecipeIngredientsList/RecipeIngredientsList";

export const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const fetchedRecipe = await getRecipeId(recipeId);
      setRecipe(fetchedRecipe);
    };

    fetchRecipe();
  }, [recipeId]);

  if (!recipe) {
    return null;
  }
  return (
    <div>
      <RecipePageHero recipe={recipe} />
      {/* <RecipeIngredientsList /> */}
      <RecipePreparation />
    </div>
  );
};

export default RecipePage;
