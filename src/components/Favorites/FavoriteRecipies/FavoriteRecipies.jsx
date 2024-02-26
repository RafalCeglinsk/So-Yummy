import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from '../../../redux/Favorites/operations';
import { selectFavorites } from '../../../redux/recipePage/selectors';

import NotFoundRecipe from '../NotFoundRecipe/NotFoundRecipe';
import FavoriteCard from '../FavoriteCard/FavoriteCard';

import {
  Container,
  FavoriteContainer,
  FavoriteList,
  FavoriteItem,
} from './FavoriteRecipies.styled';

const FavoriteRecipes = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const  favorites  = useSelector(selectFavorites)
  console.log(token)
  console.log(favorites) 

  useEffect(() => {
    dispatch(getFavorites(token));
    console.log(getFavorites)
  }, [token, dispatch]);


 
  return (
    <Container>
      <FavoriteContainer>

        <FavoriteList>
          {favorites.length !== 0 ? (
            favorites.map(recipe => (
              <FavoriteItem key={recipe._id}>
                <FavoriteCard
                  recipe={recipe}

                />
              </FavoriteItem>
            ))
          ) : (
            <NotFoundRecipe message={"You don't have favorite recipes yet..."} />
          )}
        </FavoriteList>
      </FavoriteContainer>
    </Container>
  );
};

export default FavoriteRecipes;