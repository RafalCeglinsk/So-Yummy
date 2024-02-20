import { SectionWrapper } from "./RecipeIngredients.styled";
import { ingredients as importedIngredients } from "./indegredients.js";

import { useDispatch} from "react-redux";
import { useEffect, useState } from "react";

import { addShoppingThunk, getShoppingThunk, deleteShoppingThunk } from "../../../redux/shoppingList/thunkShopping.js"
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

export const RecipeIngredientsList = ({ ingredients }) => {

  const dispatch = useDispatch()

 
 
  const [isChecked, setIsChecked] = useState(false); 

  useEffect(() => {
    dispatch(getShoppingThunk())
  }, [dispatch])

  const handleClickCheckbox = (ingredientId) => { 
    setIsChecked(!isChecked); 
    if (!isChecked) {
      dispatch(addShoppingThunk(ingredientId));
    } else {
      dispatch(deleteShoppingThunk(ingredientId));
    }
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
        {importedIngredients.map((ingredient) => (
          <IngredientsListUl key={ingredient._id.$oid}>
            <IngredientsListLi>
              <img src={ingredient.thb} alt={ingredient.ttl} />

              <span>{ingredient.ttl}</span>
              <div>2 slice</div>

              <Checkbox className="checkbox">
                <input type="checkbox" checked={isChecked} onChange={() => handleClickCheckbox(ingredient._id.$oid)} id={`checkbox-${ingredient.ttl}`} />
                <label htmlFor={`checkbox-${ingredient.ttl}`}></label>
              </Checkbox>
            </IngredientsListLi>
          </IngredientsListUl>
        ))}
      </IngredientsListContainer>
    </SectionWrapper>
  );
};
