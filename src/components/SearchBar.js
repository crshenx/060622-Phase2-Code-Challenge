import React from "react";

function SearchBar({ search, searchBar, handleCheck, checked }) {
  function check(e) {
    handleCheck(e);
  }

  return (
    <div className="search">
      <input
        type="text"
        className="searchTerm"
        value={search}
        onChange={searchBar}
      />
      <p />
      "Sort by age"
      <input type="checkbox" name="check" onChange={check} checked={checked} />
    </div>
  );
}

export default SearchBar;
