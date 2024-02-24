import { Button } from "./RecipePage.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFavorite,
  toggleFavorite,
} from "../../../redux/recipePage/operations";
import { selectFavorites } from "../../../redux/recipePage/selectors";
import { selectUser } from "../../../redux/auth/selectors";

export const AddButton = ({ recipe }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const user = useSelector(selectUser);

  const isFavorite = favorites.includes(recipe.id);

  const handleClick = () => {
    const credentials = {
      id: recipe._id,
      user: user.id,
    };
    console.log("credentials", credentials);
    if (isFavorite) {
      dispatch(removeFavorite(credentials));
    } else {
      dispatch(toggleFavorite(credentials));
    }
  };

  return (
    <Button onClick={handleClick}>
      {isFavorite ? "Remove from favorite" : "Add to favorite"}
    </Button>
  );
};
