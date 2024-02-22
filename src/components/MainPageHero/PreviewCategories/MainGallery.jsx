import React, { useEffect, useState } from "react";
import axios from "axios";
import NoImage from "../../../images/NoImage/NoImageSmall.png";
import { ButtonSeeAll } from "../../Buttons/GalleryButtonSeeAll";
import {
  GalleryUl,
  GalleryLi,
  RecipeImg,
  RecipeDescription,
  MainGalleryH2,
  ElementWrapper,
  ButtonWrapper

} from "./MainGallery.styled";

export const baseAxiosURL = "http://localhost:5001/api";

axios.defaults.baseURL = baseAxiosURL;

export const MainGallery = () => {
  const [categories, setCategories] = useState([]);
  const [viewMode, setViewMode] = useState("desktop");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/recipes/main-page");

        const categoriesArray = Object.values(response.data.recipesMainPage);
        setCategories(categoriesArray);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const getViewMode = () => {
    const width = window.innerWidth;
    if (width >= 1280) {
      return "desktop";
    } else if (width >= 768) {
      return "tablet";
    } else {
      return "mobile";
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setViewMode(getViewMode());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderRecipes = (recipes, limit) => {
    return recipes.slice(0, limit).map((recipe, _id) => (
      <ElementWrapper key={_id}>

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

  const getRecipesLimit = () => {
    switch (viewMode) {
      case "mobile":
        return 1;
      case "tablet":
        return 2;
      case "desktop":
        return categories.length;
      default:
        return 1;
    }
  };

  return (
    <GalleryUl>
      {categories.map((categoryRecipes, _id) => (
        <div key={_id}>
          <MainGalleryH2>{categoryRecipes[0].category}</MainGalleryH2>
          <GalleryLi key={_id}>
            {renderRecipes(categoryRecipes, getRecipesLimit())}
          </GalleryLi>

        <ButtonWrapper><ButtonSeeAll text="See All"/></ButtonWrapper>
        </div>
 
      ))}
    </GalleryUl>
  );
};
