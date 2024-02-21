import { SectionWrapper } from "./RecipeIngredienrs.styled";
import { useDispatch} from "react-redux";
import { useEffect, useState } from "react";
import { addShoppingThunk, deleteShoppingThunk, getShoppingThunk } from "../../../redux/shoppingList/thunkShopping";
import {
  IngredientsListContainer,
  HeadUl,
  HeadContainer,
  LiIngredients,
  LiNumber,
  LiAdd,
  IngredientsListUl,
  IngredientsListLi,
} from "./RecipeIngredienrs.styled";


export const RecipeIngredientsList = ({ ingredients }) => {

  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    dispatch(getShoppingThunk());
  }, [dispatch]);

  const handleClickCheckbox = (_id) => {
    const data = { ingredient: _id };
    setIsChecked(!isChecked)
    if (!isChecked) {
      dispatch(addShoppingThunk(data));
    }
    else {
      dispatch(deleteShoppingThunk(_id));
    }
  }

  return (
    <SectionWrapper>
      <HeadContainer>
        <HeadUl>
          <LiIngredients>Składniki</LiIngredients>
          <LiNumber>Ilość</LiNumber>
          <LiAdd>Dodaj do listy</LiAdd>
        </HeadUl>
      </HeadContainer>
      <IngredientsListContainer>
        {ingredients.map((ingredient) => (
          <IngredientsListUl key={ingredient._id.$oid}>
            <IngredientsListLi>
              <img src={ingredient.thb} alt={ingredient.ttl} />
              <span>{ingredient.ttl}</span>
              <div>2 slice</div>
            
                <input type="checkbox" id={`checkbox-${ingredient.ttl}`} onChange={() => handleClickCheckbox(ingredient._id.$oid)} />
                <label htmlFor={`checkbox-${ingredient.ttl}`}></label>
            </IngredientsListLi>
          </IngredientsListUl>
        ))}
      </IngredientsListContainer>
    </SectionWrapper>
  );
};