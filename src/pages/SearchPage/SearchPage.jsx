import React from "react";
import { SearchPageStyled } from "./SearchPage.styled.jsx";
import SearchBar from "../../components/SearchPage/SearchBar/SearchBar.jsx";
import { MainPageTittle } from "../../components/SearchPage/MainPageTittle/MainPageTittle.jsx";
import { useSelector } from "react-redux";
import { SearchedRecipesList } from "../../components/SearchPage/SearchedRecipesList/SearchedRecipesList.jsx";

const SearchPage = () => {
  const searchResults = useSelector((state) => {
    console.log(state); // log the entire state
    return state.search.searchResults;
  });
  return (
    <SearchPageStyled>
      <MainPageTittle />
      <SearchBar showSearchContainer={true} />
      <SearchedRecipesList recipes={searchResults} />
    </SearchPageStyled>
  );
};

export default SearchPage;
