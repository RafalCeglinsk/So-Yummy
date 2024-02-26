import { Button } from "./RecipePage.styled";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  removeFavorite,
  toggleFavorite,
} from "../../../redux/recipePage/operations";
import { selectFavorites } from "../../../redux/recipePage/selectors";

export const AddButton = ({ recipe }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const [isFavorite, setIsFavorite] = useState(
    favorites.some((fav) => fav.toString() === recipe.id)
  );

  useEffect(() => {
    setIsFavorite(favorites.some((fav) => fav.toString() === recipe.id));
  }, [favorites, recipe.id]);

  const handleClick = () => {
    const recipeId = recipe._id;
    const credentials = {
      recipeId: recipe._id,
    };
    if (isFavorite) {
      dispatch(removeFavorite(recipeId));
    } else {
      dispatch(toggleFavorite(credentials));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <Button onClick={handleClick}>
      {isFavorite ? "Remove from favorite" : "Add to favorite"}
    </Button>
  );
};
