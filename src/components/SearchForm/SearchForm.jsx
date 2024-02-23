import React from "react";
import { fetchData } from "../../api/searchRecipesFetch";
const SearchForm = ({ searchQuery, onSearchChange, onSubmit }) => {

 const handleClick =()=>{
  fetchData()

 }
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search recipes"
        value={searchQuery}
        onChange={onSearchChange}
      />

      <button onClick={handleClick} type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
