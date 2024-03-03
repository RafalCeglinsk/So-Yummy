import React from "react";
import { Link } from "react-router-dom";
import { StyledNav } from "./nav.styled";

export const Nav = () => {
  return (
    <StyledNav>
      <Link to="/SearchedRecipesList">Ingredients</Link>
      <Link to="/add">Add recipes</Link>
      <Link to="/myrecipes">My recipes</Link>
      <Link to="/favorite">Favorite</Link>
      <Link to="/shopping-list">Shopping list</Link>
    </StyledNav>
  );
};
