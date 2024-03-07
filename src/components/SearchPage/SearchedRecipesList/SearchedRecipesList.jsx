import { Link } from "react-router-dom";
import {
  GalleryUl,
  GalleryLi,
  RecipeImg,
  RecipeDescription,
} from "./SearchedRecipesList.styled";

export const SearchedRecipesList = ({ recipes }) => {
  return (
    <GalleryUl>
      {recipes.map((recipe, _id) => (
        <Link to={`/recipes/${recipe._id}`} key={_id}>
          <GalleryLi key={recipe._id}>
            <RecipeImg src={recipe.thumb}></RecipeImg>
            <RecipeDescription>
              <p>{recipe.title}</p>
            </RecipeDescription>
          </GalleryLi>
        </Link>
      ))}
    </GalleryUl>
  );
};
