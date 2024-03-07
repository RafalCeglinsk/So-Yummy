import { Link } from "react-router-dom";
import { GalleryUl,
  GalleryLi,
  RecipeImg,
  RecipeDescription } from "../../GalleryElement/GalleryElement.styled";

export const SearchedRecipesList = ({ recipes }) => {
  return (
    <GalleryUl>
      {recipes.map((recipe, _id) => (
           <GalleryLi key={recipe._id}>
        <Link to={`/recipes/${recipe._id}`} key={_id}>
       
            <RecipeImg src={recipe.thumb}></RecipeImg>
            <RecipeDescription>
              <p>{recipe.title}</p>
            </RecipeDescription>
            </Link>
          </GalleryLi>
     
      ))}
    </GalleryUl>
  );
};
