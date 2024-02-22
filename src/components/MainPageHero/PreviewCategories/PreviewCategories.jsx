import React from "react";
import { getRecipesLimit } from "../../../api/viewModeUtils";
import {
  GalleryLi,
  ElementWrapper,
  RecipeImg,
  RecipeDescription,
} from "./MainGallery.styled";
import NoImage from "../../../images/NoImage/NoImageSmall.png";

export const PreviewCategories = ({ categoryRecipes, viewMode }) => {
  const renderRecipes = (recipes, limit) => {
    return recipes.slice(0, limit).map((recipe, index) => (
      <ElementWrapper key={index}>
        <RecipeImg
          src={recipe.thumb ? recipe.thumb : NoImage}
          loading="lazy"
          alt={recipe.title}
        />
        <RecipeDescription>
          <p>{recipe.title}</p>
        </RecipeDescription>
      </ElementWrapper>
    ));
  };

  return (
    <GalleryLi>
      {renderRecipes(
        categoryRecipes,
        getRecipesLimit(viewMode, categoryRecipes)
      )}
    </GalleryLi>
  );
};
