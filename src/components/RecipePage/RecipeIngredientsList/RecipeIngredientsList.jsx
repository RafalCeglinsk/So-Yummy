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
  Checkbox,
} from "./RecipeIngredients.styled";
import { addShoppingThunk } from "../../../redux/shoppingList/thunkShopping";

export const RecipeIngredientsList = ({ ingredients }) => {
  const dispatch = useDispatch();

  const handleCheckbox = (ingredient) => {
    const credentrials = {
      id: ingredient.id,
      name: ingredient.ttl,
    };
    dispatch(addShoppingThunk(credentrials));
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
        {ingredients.map((ingredient) => (
          <IngredientsListUl key={ingredient.id}>
            <IngredientsListLi>
              <img src={ingredient.thb} alt={ingredient.ttl} />
              <span>{ingredient.ttl}</span>
              <div>{ingredient.measure}</div>
              <Checkbox className="checkbox">
                <input
                  type="checkbox"
                  id={`checkbox-${ingredient.ttl}`}
                  onChange={() => handleCheckbox(ingredient)}
                />
                <label htmlFor={`checkbox-${ingredient.ttl}`}></label>
              </Checkbox>
            </IngredientsListLi>
          </IngredientsListUl>
        ))}
      </IngredientsListContainer>
    </SectionWrapper>
  );
};
