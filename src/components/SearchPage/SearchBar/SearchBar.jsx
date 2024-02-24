import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { performSearch } from "../../../redux/searchBar/operations.js";
import SearchBarStyled from "./SearchBar.styled.jsx";
import {
  Form,
  SearchSpan,
  Label,
  Select,
  Option,
} from "./SearchBar.styled.jsx";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [searchType, setSearchType] = useState("query");
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    setValue(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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

      <Label>
        <SearchSpan>Search by:</SearchSpan>{" "}
        <Select value={searchType} onChange={handleTypeChange}>
          <Option value="title">Title</Option>
          <Option value="ingredients">Ingredients</Option>
        </Select>
      </Label>
    </Form>
  );
};

export default SearchBar;
