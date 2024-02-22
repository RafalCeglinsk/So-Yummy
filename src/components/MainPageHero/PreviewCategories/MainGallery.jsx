import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { GalleryUl, MainGalleryH2, ButtonWrapper } from "./MainGallery.styled";
import { PreviewCategories } from "./PreviewCategories";
import { fetchCategories } from "../../../api/mainRecipesApi";
import { getRecipesLimit , getViewMode} from "../../../api/viewModeUtils";
import { ButtonSeeAll } from "../../Buttons/GalleryButtonSeeAll";

export const MainGallery = () => {
  const [categories, setCategories] = useState([]);
  const [viewMode, setViewMode] = useState(getViewMode());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setViewMode(getViewMode());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <GalleryUl>
      {categories.map((categoryRecipes, _id) => (
        <div key={_id}>
          <MainGalleryH2>{categoryRecipes[0].category}</MainGalleryH2>
          <PreviewCategories categoryRecipes={categoryRecipes} viewMode={viewMode} />
          <ButtonWrapper>
          <Link to={`/categories/${categoryRecipes[0].category}`}>
             <ButtonSeeAll text="See All" /> </Link>
          </ButtonWrapper>
        </div>
      ))}
    </GalleryUl>
  );
};