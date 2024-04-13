import React from "react";

function Filter({ handleTitleChange, handleRateChange }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        onChange={handleRateChange}
      />
    </div>
  );
}

export default Filter;
