import React from "react";
import { SearchPageStyled, TitleSearchPage } from "./SearchPage.styled.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import SearchedRecipesList from "../../components/SearchedRecipesList/SearchedRecipesList.jsx";

const SearchPage = () => {
  return (
    <SearchPageStyled>
      <TitleSearchPage>Search</TitleSearchPage>
      <SearchBar />
      <SearchedRecipesList />
    </SearchPageStyled>
  );
};

export default SearchPage;
