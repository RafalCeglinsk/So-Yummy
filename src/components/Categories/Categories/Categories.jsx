import { HorizontalScrollList } from "../HorizontalScrollList/HorizontalScrollList";
import { GalleryElement } from "../../GalleryElement/GalleryElement";

import { CategoriesWrapper } from "./Categories.styled";

export const Categories = () => {
  return (
    <div>
      <CategoriesWrapper>
        <HorizontalScrollList />
        <GalleryElement />
      </CategoriesWrapper>
    </div>
  );
};
