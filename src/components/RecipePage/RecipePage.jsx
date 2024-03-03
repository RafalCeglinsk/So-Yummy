import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeId } from "../../redux/recipes/GetRecipes/operations";
import { RecipePageHero } from "./RecipePageHero/RecipePageHero";
import { RecipePreparation } from "./RecipePreparation/RecipePreparation";
import { RecipeIngredientsList } from "./RecipeIngredientsList/RecipeIngredientsList";
import { selectRecipe } from "../../redux/recipes/GetRecipes/selectors";

export const RecipePage = () => {
  const { recipeId } = useParams();
  const recipe = useSelector(selectRecipe);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipeId(recipeId));
  }, [recipeId, dispatch]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <RecipePageHero recipe={recipe} />
      <RecipeIngredientsList recipe={recipe} />
      <RecipePreparation recipe={recipe} />
    </div>
  );
};

export default RecipePage;
