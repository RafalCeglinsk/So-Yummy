import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import SearchBarStyled from "./SearchBar.styled.jsx";
import { SearchSpan, SearchContainer,Select,Option  } from "./SearchBar.styled.jsx";
// to było wcześniej w funkcji:

  //   const [searchQuery, setSearchQuery] = useState("");
  //   const [searchType, setSearchType] = useState("query");
  //   const navigate = useNavigate();

  //   const handleSearchChange = (event) => {
  //     setSearchQuery(event.target.value);
  //   };

  //   const handleTypeChange = (type) => {
  //     setSearchType(type);
  //   };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // navigate(`?type=${searchType}&query=${encodeURIComponent(searchQuery)}`);
  //     if (searchType === "ingredients") {
  //       fetchIngredients()

  //     }
  //     else{
  // fetchData()
  //     }
  //   };


  const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    return (
      <>
            <SearchBarStyled>
        <input
          // className={className}
          type="text"
          name="value"
          autoComplete="off"
          autoFocus
          placeholder="Search recipes"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">
    Search
        </button>
      </SearchBarStyled>
 
      <SearchContainer>
     <SearchSpan>Search by:</SearchSpan>       <Select >
        <Option value="title">Title</Option>
        <Option value="ingredients">Ingredients</Option>
      </Select>
</SearchContainer>
      
      
      </>
   );
  };
  
  export default SearchBar;
