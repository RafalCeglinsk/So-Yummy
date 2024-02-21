// import { IngredientsContainer } from "../../api/getIngredients";
import { useParams } from "react-router-dom";
import { getRecipeId } from "../../api/getRecipeId";
import { RecipePageHero } from "./RecipePageHero/RecipePageHero";
import { RecipePreparation } from "./RecipePreparation/RecipePreparation";

export const RecipePage = () => {
  const { recipeId } = useParams();
  getRecipeId(recipeId);
  return (
    <div>
      <RecipePageHero />
      {/* <IngredientsContainer /> */}
      <RecipePreparation />
    </div>
  );
};
