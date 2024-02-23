import { Button } from "./RecipePage.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFavorite,
  toggleFavorite,
} from "../../../redux/recipePage/operations";
import { selectFavorites } from "../../../redux/recipePage/selectors";

export const AddButton = ({ recipe }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.includes(recipe.id);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(recipe.id));
    } else {
      dispatch(toggleFavorite(recipe.id));
    }
  };

  return (
    <Button onClick={handleClick}>
      {isFavorite ? "Remove from favorite" : "Add to favorite"}
    </Button>
  );
};
