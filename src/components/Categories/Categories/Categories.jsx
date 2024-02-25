import { H2 } from "./Categories.styled";
import { HorizontalScrollList } from "../HorizontalScrollList/HorizontalScrollList";
import { GalleryElement } from "../../GalleryElement/GalleryElement";

export const Categories = () => {
  return (
    <div>
      <H2>Categories</H2>
      <HorizontalScrollList />
      <GalleryElement />
    </div>
  );
};
