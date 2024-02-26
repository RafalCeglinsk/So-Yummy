import { Link } from "react-router-dom";
// import { useSelector } from 'react-redux';
import {
  FavRecipeItem,
  RecipeImageThumb,
  RecipeImage,
  RecipeTitle,
  RecipeDescription,
  RecipePrepTime,
  DeleteButton,
  SeeRecipeBtn,
  FavRecipeTopInfo,
} from "./MyRecipe.styled.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteRecipe,
  getMyRecipes,
} from "../../redux/recipePage/operations.js";
import { selectRecipe } from "../../redux/recipePage/selectors.js";
export const MyRecipe = () => {
  const { token } = useSelector((state) => state.auth);
  const recipe = useSelector(selectRecipe);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyRecipes(token));
  }, [dispatch, token]);

  const onDelete = (id) => {
    dispatch(deleteRecipe(id, token));
  };

  if (!recipe) {
    return null;
  }
  return (
    <FavRecipeItem>
      <Link to={`/recipe/${recipe._id}`}>
        <RecipeImageThumb>
          {recipe.thumb(<RecipeImage src={recipe.thumb} alt={recipe.title} />)}
        </RecipeImageThumb>
      </Link>
      <FavRecipeTopInfo>
        <div>
          <RecipeTitle>{recipe.title}</RecipeTitle>
          <RecipeDescription>{recipe.description}</RecipeDescription>
        </div>
        <RecipePrepTime>{recipe.time}</RecipePrepTime>
      </FavRecipeTopInfo>
      <DeleteButton onClick={() => onDelete(recipe._id)}></DeleteButton>
      <Link to={`/recipe/${recipe._id}`}>
        <SeeRecipeBtn>See Recipe</SeeRecipeBtn>
      </Link>
    </FavRecipeItem>
  );
};
