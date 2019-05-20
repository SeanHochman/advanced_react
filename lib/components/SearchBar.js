import React, { useState, useCallback } from "react";
import debounce from "lodash.debounce";

const SearchBar = ({ handleSearchTerm }) => {
  const [search, setSearch] = useState({ searchTerm: "" });
  const setSearchTerm = useCallback(
    debounce(value => handleSearchTerm(value), 1000),
    []
  );
  const getSearchTerm = () => {
    const { value } = event.target;
    setSearch({ searchTerm: value });
    setSearchTerm(value);
  };
  return (
    <input
      type="search"
      placeholder="Search for article"
      value={search.searchTerm}
      onChange={getSearchTerm}
    />
  );
};

export default SearchBar;
