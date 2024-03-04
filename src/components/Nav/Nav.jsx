import React from 'react';
import { NavList, NavLinkStyled } from './Nav.styled';

const Nav = ({ handleNavClick }) => {
  return (
    <NavList>
      <li>
        <NavLinkStyled to="/search?ingredients=" onClick={handleNavClick}>
          Ingredients
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/add" onClick={handleNavClick}>
          Add Recipe
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/my" onClick={handleNavClick}>
          My Recipes
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/favorite" onClick={handleNavClick}>
          Favorite
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/shopping-list" onClick={handleNavClick}>
          Shopping List
        </NavLinkStyled>
      </li>
    </NavList>
  );
};

export default Nav;