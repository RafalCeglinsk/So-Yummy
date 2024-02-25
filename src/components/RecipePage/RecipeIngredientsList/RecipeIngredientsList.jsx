import { useDispatch } from "react-redux";
import { SectionWrapper } from "./RecipeIngredients.styled";
import {
  IngredientsListContainer,
  HeadUl,
  HeadContainer,
  LiIngredients,
  LiNumber,
  LiAdd,
  IngredientsListUl,
  IngredientsListLi,

} from "./RecipeIngredients.styled";
import { addShoppingThunk } from "../../../redux/shoppingList/thunkShopping";

export const RecipeIngredientsList = ({ recipe }) => {
  const ingredients = recipe.ingredients;
  const dispatch = useDispatch();
  const handleCheckbox = (ingredient) => {
    const credentials = {
      ingredientId: ingredient._id,
      recipeId: recipe._id,
      measure: ingredient.measure,
    };
    dispatch(addShoppingThunk(credentials));
  };
  return (
    <SectionWrapper>
      <HeadContainer>
        <HeadUl>
          <LiIngredients>Ingredients</LiIngredients>
          <LiNumber>Number</LiNumber>
          <LiAdd>Add to list</LiAdd>
        </HeadUl>
      </HeadContainer>
      <IngredientsListContainer>
        {ingredients.map((ingredient, id) => (
          <IngredientsListUl key={id}>
            <IngredientsListLi>
              <img src={ingredient.thb} alt={ingredient.ttl} />
              <span>{ingredient.ttl}</span>
              <div>{ingredient.measure}</div>

              <input
                type="checkbox"
                id={`checkbox-${ingredient.ttl}`}
                onChange={() => handleCheckbox(ingredient)}
              />
              <label htmlFor={`checkbox-${ingredient.ttl}`}></label>
            </IngredientsListLi>
          </IngredientsListUl>
        ))}
      </IngredientsListContainer>
    </SectionWrapper>
  );
};
