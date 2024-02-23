import React from "react";
import { SearchSpan, SearchContainer,Select,Option } from "./SearchTypeSelector.styled.jsx";

const SearchTypeSelector = ({ onTypeChange, searchType }) => {
  return (
    <SearchContainer>
      <SearchSpan>Search by:</SearchSpan>
      <Select value={searchType} onChange={(e) => onTypeChange(e.target.value)}>
        <Option value="title">Title</Option>
        <Option value="ingredients">Ingredients</Option>
      </Select>
    </SearchContainer>
  );
};

export default SearchTypeSelector;
