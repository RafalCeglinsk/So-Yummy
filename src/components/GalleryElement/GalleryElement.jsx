import { Link } from "react-router-dom";

import { ButtonSeeAll } from "./GalleryButtonSeeAll";

import NoImage from "../../images/NoImage/NoImageSmall.png";

import {
  GalleryUl,
  GalleryLi,
  RecipeImg,
  RecipeDescription,
} from "./GalleryElement.styled";
export const GalleryElement = () => {
  return (
    <GalleryUl>
      <GalleryLi>
        {/* <link> */}
        {/* <RecipeImg  src={thumb ? thumb : NoImage}>  */}
        <RecipeImg src={NoImage} loading="lazy"></RecipeImg>

        <RecipeDescription>
          <p>TEST DESCRIPTION</p>
        </RecipeDescription>

        {/* <ButtonSeeAll /> */}
        {/* </link> */}
      </GalleryLi>
    </GalleryUl>
  );
};
