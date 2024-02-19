import { SectionWrapper } from "./RecipeIngredients.styled";
import {
  TableBody,
  HeadUl,
  HeadContainer,
  LiIngredients,
  LiNumber,
  LiAdd,
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
      <TableBody>
        {ingredients.map((ingredient) => (
          <ul key={ingredient._id.$oid}>
            <li>
              <img src={ingredient.thb} alt={ingredient.ttl} />

              {ingredient.ttl}

              <input type="checkbox" />
            </li>
          </ul>
        ))}
      </TableBody>
    </SectionWrapper>
  );
};
