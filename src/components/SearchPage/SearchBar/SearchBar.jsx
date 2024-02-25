import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { performSearch } from "../../../redux/searchBar/operations.js";
import SearchBarStyled from "./SearchBar.styled.jsx";
import {
  Form,
  SearchSpan,
  Label,
  Select,
  Option,
} from "./SearchBar.styled.jsx";

const SearchBar = ({showSearchContainer}) => {
  const [value, setValue] = useState("");
  const [searchType, setSearchType] = useState("title");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setValue(event.target.value);

  };

  const handleTypeChange = (event) => {

    setSearchType(event.target.value);
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim() !== "") {
      navigate(`/search?query=${value}&type=${searchType}`);
    } else {
      alert("Please enter a search query.");
    }
    dispatch(performSearch({ query: value, type: searchType }));
  };




  return (
    <Form onSubmit={handleSubmit}>
      <SearchBarStyled>
        <input
          type="text"
          name="value"
          autoComplete="off"
          autoFocus
          placeholder="Search recipes"
          value={value}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </SearchBarStyled>
      {showSearchContainer && (
      <Label>
        <SearchSpan>Search by:</SearchSpan>{" "}
        <Select value={searchType} onChange={handleTypeChange}>
          <Option value="title">Title</Option>
          <Option value="ingredients">Ingredients</Option>
        </Select>
      </Label>
        )}
    </Form>
    
  );
};

export default SearchBar;
