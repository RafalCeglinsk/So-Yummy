import React, { useEffect, useState } from "react";
import axios from "axios";
import NoImage from "../../../images/NoImage/NoImageSmall.png";
import {
  GalleryUl,
  GalleryLi,
  RecipeImg,
  RecipeDescription,
  MainGalleryH2
} from "./MainGallery.styled";

//  create file in App.


export const baseAxiosURL = "http://localhost:5001/api";

axios.defaults.baseURL = baseAxiosURL;

export const MainGallery = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/recipes/main-page");

        const categoriesArray = Object.values(response.data.recipesMainPage);
        setCategories(categoriesArray);
        // console.log(categoriesArray);
        // console.log(response.data.recipesMainPage);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div>
    
    
      <GalleryUl>
         
        {categories.map((categoryRecipes, index) => (

          <>

  
          <React.Fragment key={index}>



            {categoryRecipes.map((recipe, recipeIndex) => (
              <GalleryLi key={recipeIndex}>
                          <MainGalleryH2>{categoryRecipes[0].category}</MainGalleryH2>
                <RecipeImg
                  src={recipe.thumb ? recipe.thumb : NoImage}
                  loading="lazy"
                  alt={recipe.title}
                />
                <RecipeDescription>
                  <p>{recipe.title}</p>
                </RecipeDescription>
              </GalleryLi>
            ))}



           
          </React.Fragment>
          </>
        ))}
  
      </GalleryUl>
    </div>
  );
};
