import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNav } from './nav.styled';

export const Nav = () => {
  return (
    <StyledNav>
      <Link to="/SearchTypeSelector">Ingredients</Link>
      <Link to="/AddRecipies">Add recipes</Link>
      <Link to="/MyRecipies">My recipes</Link>
      <Link to="/Favorites">Favorite</Link>
      <Link to="/ShoppingList">Shopping list</Link>
    </StyledNav>
  );
};