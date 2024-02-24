import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import SearchBarStyled from "./SearchBar.styled.jsx";
import {
  Form,
  SearchSpan,
  Label,
  Select,
  Option,
} from "./SearchBar.styled.jsx";


const SearchBar = ({ showSearchContainer , searchQuery}) => {

  const [value, setValue] = useState(
    searchQuery === undefined ? '' : searchQuery
  );

  const [selectedValue, setSelectedValue]= useState('query')

  let [searchParams, setSearchParams] = useSearchParams();


  const handleSearchChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    setSearchParams(`?type=${selectedValue}&query=${encodeURIComponent(inputValue)}`);
  };


  const handleTypeChange = (event) => {
    const selectValue = event.target.value;
    setSelectedValue(selectValue);
    setSearchParams(`?type=${selectValue}&query=${encodeURIComponent(value)}`);
  };




  return (

    <Form>
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

          {/* <Select  > */}
          <Select value={selectedValue} onChange={handleTypeChange}>

            <Option value="title">Title</Option>
            <Option value="ingredients">Ingredients</Option>
          </Select>
        </Label>
      )}
      </Form>

  );
};

export default SearchBar;


// to było wcześniej w funkcji:

//   const [value, setValue] = useState("");
//   const [searchType, setSearchType] = useState("query");
//   const navigate = useNavigate();

//   const handleSearchChange = (event) => {
//     setValue(event.target.value);
//   };

//   const handleTypeChange = (type) => {
//     setSearchType(type);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (searchType === "ingredients") {
//       fetchIngredients()

//     }
//     else{
// fetchData()
//     }
//   };