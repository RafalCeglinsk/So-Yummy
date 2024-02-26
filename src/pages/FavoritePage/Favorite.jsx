import React from 'react';

import FavoriteRecipes from '../../components/Favorites/FavoriteRecipies/FavoriteRecipies';
import { MainTitle } from '../../components/MainPageTittle/MainPageTittle';
import Footer from '../../components/footer/footer';

const FavoritePage = () => {
  return (
    <>
    <MainTitle>Favorites</MainTitle>
      <FavoriteRecipes />
      <Footer/>
    </>
  );
}

export default FavoritePage;