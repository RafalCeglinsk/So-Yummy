import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm.jsx";
import SearchTypeSelector from "../SearchTypeSelector/SearchTypeSelector.jsx";
import SearchBarStyled from "./SearchBar.styled.jsx";

const SearchBar = () => {
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
    navigate(`/?type=${searchType}&query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <SearchBarStyled>
      <SearchForm
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onSubmit={handleSubmit}
      />
      <SearchTypeSelector
        onTypeChange={handleTypeChange}
        searchType={searchType}
      />
    </SearchBarStyled>
  );
};

export default SearchBar;
