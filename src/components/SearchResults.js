import React from "react";

const SearchResults = ({ searchChange }) => {
  return (
    <div>
      <input type="search" placeholder="Search Robot" className="searchBox" onChange={searchChange} />
    </div>
  );
};

export default SearchResults;
