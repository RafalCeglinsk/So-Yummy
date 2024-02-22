import React from "react";
import { SearchSpan, SearchContainer } from "./SearchTypeSelector.styled.jsx";

const SearchTypeSelector = ({ onTypeChange, searchType }) => {
  return (
    <SearchContainer>
      <SearchSpan>Search by:</SearchSpan>
      <select value={searchType} onChange={(e) => onTypeChange(e.target.value)}>
        <option value="title">Title</option>
        <option value="ingredients">Ingredients</option>
      </select>
    </SearchContainer>
  );
};

export default SearchTypeSelector;
