import React from 'react';
import { useState } from 'react';
import NotFoundRecipe from '../NotFoundRecipe/NotFoundRecipe';
import FavoriteCard from '../FavoriteCard/FavoriteCard';

import {
  FavoriteTitle,
  Container,
  FavoriteContainer,
  FavoriteList,
  FavoriteItem,
} from './FavoriteRecipies.styled';

const FavoriteRecipes = () => {
  const [allRecipes, setAllRecipes] = useState([]);

  const handleDelete = async id => {
    const newRecipes = allRecipes.filter(({ _id }) => _id !== id);
    setAllRecipes(newRecipes);
  };

  return (
    <Container>
    <FavoriteContainer>
      <FavoriteTitle>Favorites</FavoriteTitle>
      <FavoriteList>
        {allRecipes.length !== 0 ? (
          allRecipes.map(recipe => {
            return (
              <FavoriteItem key={recipe._id}>
                <FavoriteCard
                  recipe={recipe}
                  onDelete={() => {
                    handleDelete(recipe._id);
                  }}
                  to={`/recipe/${recipe._id}`}
                />
              </FavoriteItem>
            );
          })
        ) : (
          <NotFoundRecipe
            message={"You don't have favorites recipes yet..."}
          />
        )}
      </FavoriteList>
    </FavoriteContainer>
  </Container>
  
  );
};

export default FavoriteRecipes;


{/* <>
 */}