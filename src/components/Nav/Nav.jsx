import React from 'react';
import { NavList, NavLinkStyled } from './Nav.styled';

const Nav = () => {
  return (
    <NavList>
      <li>
        <NavLinkStyled to="/search?ingredients=" >
          Ingredients
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/add">
          Add Recipe
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/my">
          My Recipes
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/favorite" >
          Favorite
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/shopping-list">
          Shopping List
        </NavLinkStyled>
      </li>
    </NavList>
  );
};

export default Nav;