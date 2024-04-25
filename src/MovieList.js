// MovieList.js
import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movies, deleteMovie }) => {
  return (
    <div>
      {movies.map((movie, index) => (
        <MovieItem
          key={index}
          movie={movie}
          index={index}
          deleteMovie={deleteMovie}
        />
      ))}
    </div>
  );
};

export default MovieList;
