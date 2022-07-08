import React from "react";

function SearchBar({ search, searchBar }) {
  return (
    <div className="search">
      <input
        type="text"
        className="searchTerm"
        value={search}
        onChange={searchBar}
      />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
