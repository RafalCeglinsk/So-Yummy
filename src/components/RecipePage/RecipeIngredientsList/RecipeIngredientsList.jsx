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

export const RecipeIngredientsList = ({ ingredients }) => {
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
          <IngredientsListUl key={ingredient._id.$oid}>
            <IngredientsListLi>
              <img src={ingredient.thb} alt={ingredient.ttl} />

              <span>{ingredient.ttl}</span>
              <div>2 chopped</div>

              <Checkbox className="checkbox">
                <input type="checkbox" id={`checkbox-${ingredient.ttl}`} />
                <label htmlFor={`checkbox-${ingredient.ttl}`}></label>
              </Checkbox>
            </IngredientsListLi>
          </IngredientsListUl>
        ))}
      </IngredientsListContainer>
    </SectionWrapper>
  );
};
