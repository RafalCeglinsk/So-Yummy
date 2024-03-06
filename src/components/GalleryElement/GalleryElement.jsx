import { Link, useParams } from "react-router-dom";
import NoImage from "../../images/NoImage/NoImageSmall.png";

import {
  GalleryUl,
  GalleryLi,
  RecipeImg,
  RecipeDescription,
} from "./GalleryElement.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategory } from "../../redux/Categories/operations";
import { selectCategory } from "../../redux/Categories/selectors";
export const GalleryElement = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const categories = useSelector(selectCategory);

  useEffect(() => {
    dispatch(getCategory(category));
  }, [dispatch, category]);

  return (
    <GalleryUl>
      {categories &&
        categories.map(({ _id, thumb, title }) => {
          return (
            <GalleryLi key={_id}>
              <Link to={`/recipes/${_id}`}>
                <RecipeImg
                  src={thumb ? thumb : NoImage}
                  alt={title}
                  loading="lazy"
                />
                <RecipeDescription>
                  <p>{title}</p>
                </RecipeDescription>
              </Link>
            </GalleryLi>
          );
        })}
    </GalleryUl>
  );
};
