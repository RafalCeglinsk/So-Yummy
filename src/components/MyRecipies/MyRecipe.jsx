import { Link } from 'react-router-dom';
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
} from './MyRecipe.styled.jsx';
export const MyRecipe = ({ recipe, onDelete }) => {
  return (
    <FavRecipeItem>
      <Link to={`/recipe/${recipe._id}`}>
        <RecipeImageThumb>
          {recipe.thumb (
            <RecipeImage src={recipe.thumb} alt={recipe.title} />
          ) }
        </RecipeImageThumb>
      </Link>
      <FavRecipeTopInfo>
        <div>
          <RecipeTitle >{recipe.title}</RecipeTitle>
          <RecipeDescription >
            {recipe.description}
          </RecipeDescription>
        </div>
        <RecipePrepTime >{recipe.time}</RecipePrepTime>
      </FavRecipeTopInfo>
      <DeleteButton onClick={() => onDelete(recipe._id)} >
      </DeleteButton>
      <Link to={`/recipe/${recipe._id}`}>
        <SeeRecipeBtn >See Recipe</SeeRecipeBtn>
      </Link>
    </FavRecipeItem>
  );
};