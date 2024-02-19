import { IngredientsContainer } from "../../api/getIngredients";
import { RecipePageHero } from "./RecipePageHero/RecipePageHero";

export const RecipePage = () => {
  return (
    <div>
      <RecipePageHero />
      <IngredientsContainer />
    </div>
  );
};
