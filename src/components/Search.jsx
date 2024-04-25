import React from "react";
import StarRating from "./StarRating";

const Search = ({ searchText, handleSearchText, rating, handleRating }) => {
  return (
    <div className="search">
      <div className="search-nav">
        <form>
          <input
            className="text"
            value={searchText}
            onChange={(e) => handleSearchText(e.target.value)}
          />
        </form>
        <StarRating rating={rating} handleRating={handleRating} />
      </div>
    </div>
  );
};

export default Search;
