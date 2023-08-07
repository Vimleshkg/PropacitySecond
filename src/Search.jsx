import React from "react";
import { BsSearch } from "react-icons/bs";

function Search() {
  return (
    <div className="search">
      <label>Search Your Configuration</label>
      <br></br>
      <input type="text" />

      <div className="search-icon">
        <BsSearch className="main-icon"/>
      </div>
    </div>
  );
}

export default Search;
