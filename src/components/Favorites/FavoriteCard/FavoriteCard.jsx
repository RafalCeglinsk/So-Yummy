import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { CurvedButtonColor } from "../../Buttons/CurvedButton";
import { Trash } from "../../RenderSvg/RenderSvg";
import {
  FavoriteCardContainer,
  FavoriteCardRemoveButton,
  FavoriteCardDesc,
  FavoriteCardImage,
  FavoriteCardThumb,
  FavoriteCardTime,
  FavoriteCardTitle,
  FavoriteCardStyle,
  FavoriteCardWrapper,
  TitleWrapper,
} from "./FavoriteCard.stytled";

export default function FavoriteCard({ owner, to, onDelete, recipe }) {
  const { thumb, title, time, description } = recipe;
  const navigate = useNavigate();

  const seeRecipeHandler = () => {
    navigate(`/recipes/${recipe.id}`);
  };

  const removeHandler = async () => {
    try {
      await onDelete();
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <FavoriteCardStyle owner={owner}>
      <FavoriteCardWrapper>
        <FavoriteCardThumb>
          <FavoriteCardImage src={thumb} />
        </FavoriteCardThumb>

        <FavoriteCardContainer>
          <TitleWrapper>
            <FavoriteCardTitle>{title}</FavoriteCardTitle>
            <FavoriteCardRemoveButton
              type="button"
              onClick={removeHandler}
              aria-label="Delete recipe from favorite"
            >
              <Trash />
            </FavoriteCardRemoveButton>
          </TitleWrapper>

          <FavoriteCardDesc>{description}</FavoriteCardDesc>
          <CurvedButtonColor
            className="ListGallery"
            text="See Recipe"
            onClick={seeRecipeHandler}
          ></CurvedButtonColor>
          <FavoriteCardTime>{time} min</FavoriteCardTime>
        </FavoriteCardContainer>
      </FavoriteCardWrapper>
    </FavoriteCardStyle>
  );
}

FavoriteCard.propTypes = {
  owner: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  recipe: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

FavoriteCard.defaultProps = {
  owner: false,
};
