import React, { useState } from 'react';

import SearchBarStyled from "./SearchBar.styled.jsx";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
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
  );
};

export default SearchBar;