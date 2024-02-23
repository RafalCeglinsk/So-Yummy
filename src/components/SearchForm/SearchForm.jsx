import React from "react";

const SearchForm = ({ searchQuery, onSearchChange, onSubmit }) => {
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
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
