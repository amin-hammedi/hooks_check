import React from "react";

function MovieCard({ movie, onEdit, onDelete }) {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}</p>
        <button onClick={() => onEdit(movie)}>Edit</button>
        <button onClick={() => onDelete(movie)}>Delete</button>
      </div>
    </div>
  );
}

export default MovieCard;
