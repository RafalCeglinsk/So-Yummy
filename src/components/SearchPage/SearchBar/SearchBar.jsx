import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { performSearch } from "../../../redux/searchBar/operations.js";
import SearchBarStyled from "./SearchBar.styled.jsx";
import Select from "react-select";
import { Form, SearchSpan, Label, SelectStyle , customSelectStyles} from "./SearchBar.styled.jsx";

const SearchBar = ({ showSearchContainer }) => {
  const [value, setValue] = useState("");
  const [searchType, setSearchType] = useState({
    value: "title",
    label: "Title",
  }); // Początkowa wartość dla Select
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setValue(event.target.value);
  };

  const handleTypeChange = (selectedOption) => {
    setSearchType(selectedOption);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim() !== "") {
      navigate(`/search?query=${value}&type=${searchType.value}`);
    } else {
      alert("Please enter a search query.");
    }
    dispatch(performSearch({ query: value, type: searchType.value }));
  };

  // Opcje dla Select
  const options = [
    { value: "title", label: "Title" },
    { value: "ingredients", label: "Ingredients" },
  ];

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
          <SelectStyle>
            {" "}
            <Select
                    styles={customSelectStyles}
              options={options}
              value={searchType}
              onChange={handleTypeChange}
            />
          </SelectStyle>
        </Label>
      )}
    </Form>
  );
};

export default SearchBar;
