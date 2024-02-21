import PropTypes from 'prop-types';

import { NotFoundRecipeTxt, NotFoundContainer } from './NotFoundRecipe.styled';

export default function NotFoundRecipe({ message }) {
  return (
    <NotFoundContainer>
      <NotFoundRecipeTxt>{message}</NotFoundRecipeTxt>
    </NotFoundContainer>
  );
}

NotFoundRecipe.propTypes = { message: PropTypes.string.isRequired };