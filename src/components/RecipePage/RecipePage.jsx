// import { IngredientsContainer } from "../../api/getIngredients";
import { RecipePageHero } from "./RecipePageHero/RecipePageHero";
import { RecipePreparation } from "./RecipePreparation/RecipePreparation";

export const RecipePage = () => {
  return (
    <div>
      <RecipePageHero />
      {/* <IngredientsContainer /> */}
      <RecipePreparation />
    </div>
  );
};
