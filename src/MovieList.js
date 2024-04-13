import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, onEdit, onDelete }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.title}
          movie={movie}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default MovieList;
