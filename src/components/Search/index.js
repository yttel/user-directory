import React from "react";

function Search({ searchTerm, handleInputChange }) {
  return (
    <div>
      <form className="form">
        <input
          value={searchTerm}
          name="searchTerm"
          onChange={handleInputChange}
          type="text"
          placeholder="search here"
        />
      </form>
    </div>
  );
}

export default Search;
