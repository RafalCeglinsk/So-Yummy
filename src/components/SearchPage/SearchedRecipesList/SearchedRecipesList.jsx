import { GalleryUl,GalleryLi, RecipeImg,RecipeDescription} from "./SearchedRecipesList.styled";

export const SearchedRecipesList = ({ recipes }) => {
  return (
    <GalleryUl>
      {recipes.map((recipe) => (
        <GalleryLi key={recipe._id}>
          <RecipeImg src={recipe.thumb}></RecipeImg>
   
       <RecipeDescription>       <p>{recipe.title}</p></RecipeDescription>
        </GalleryLi>
      ))}
    </GalleryUl>
  );
};
