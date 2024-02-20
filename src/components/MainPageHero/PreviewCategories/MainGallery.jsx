import React, { useEffect, useState } from "react";
import axios from "axios";
import NoImage from "../../../images/NoImage/NoImageSmall.png"
import {
  GalleryUl,
  GalleryLi,
  RecipeImg,
  RecipeDescription,
} from "./MainGallery.styled";

export const baseAxiosURL = 'http://localhost:5001/api';

axios.defaults.baseURL = baseAxiosURL;

export const MainGallery = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/recipes/categories');
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <GalleryUl>
      {categories.map((category, index) => (
        <GalleryLi key={index}>
          <RecipeImg src={NoImage} loading="lazy" />
          <RecipeDescription>
            <p>{category}</p>
          </RecipeDescription>
        </GalleryLi>
      ))}
    </GalleryUl>
  );
};
