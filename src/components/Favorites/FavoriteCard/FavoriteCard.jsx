import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  FavoriteCardContainer,
  FavoriteCardRemoveButton,
  FavoriteCardDesc,
  FavoriteCardImage,
  FavoriteCardSeeMoreButton,
  FavoriteCardThumb,
  FavoriteCardTime,
  FavoriteCardTitle,
  FavoriteCardStyle,
  FavoriteCardWrapper,
} from './FavoriteCard.stytled';

export default function FavoriteCard({ owner, to, onDelete, recipe }) {
  const { thumb, title, time, description } = recipe;
  const navigate = useNavigate();

  const seeRecipeHandler = () => {
    navigate(to);
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
          <FavoriteCardTitle>{title}</FavoriteCardTitle>
          <FavoriteCardDesc>{description}</FavoriteCardDesc>
          <FavoriteCardTime>{time} min</FavoriteCardTime>

          <FavoriteCardRemoveButton
            type="button"
            onClick={removeHandler}
            aria-label="Delete recipe from favorite"
          >
            Delete
          </FavoriteCardRemoveButton>

          <FavoriteCardSeeMoreButton type="button" onClick={seeRecipeHandler}>
            See recipe
          </FavoriteCardSeeMoreButton>
        </FavoriteCardContainer>
      </FavoriteCardWrapper>
      Deleting recipe...
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