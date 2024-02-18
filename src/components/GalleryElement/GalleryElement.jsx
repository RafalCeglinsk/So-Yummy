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
      {/* {recipes.map(({ _id, title, thumb, favorite }) => {
          return (  */}

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
