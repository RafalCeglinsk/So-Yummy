import React, { useState } from "react";
import fetchData, fetchIgredients from "../../src/api/searchRecipesFetch.js";
import { useNavigate } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm.jsx";
import SearchTypeSelector from "../SearchTypeSelector/SearchTypeSelector.jsx";
import SearchBarStyled from "./SearchBar.styled.jsx";

const SearchBar = ({ showTypeSelector }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("query");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleTypeChange = (type) => {
    setSearchType(type);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // navigate(`?type=${searchType}&query=${encodeURIComponent(searchQuery)}`);
    if (searchType === ingredients) {
fetchIgredients()
    
    }
    else{
fetchData()
    }
  };

  return (
    <>
    <SearchBarStyled>
      <SearchForm
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onSubmit={handleSubmit}
      />

    </SearchBarStyled>
          {showTypeSelector && (
            <SearchTypeSelector
              onTypeChange={handleTypeChange}
              searchType={searchType}
            />
          )}
          </>
  );
};


export default SearchBar;
