import React, { useState } from "react";
import "./App.css";
import MovieList from "./MovieList";
import Filter from "./Filter";
import AddEditModal from "./AddEditModal";

function App() {
  const [movies, setMovies] = useState([]);

  const [filteredMovies, setFilteredMovies] = useState([...movies]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setFilteredMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleRateChange = (e) => {
    const { value } = e.target;
    setFilteredMovies(
      movies.filter((movie) => movie.rating >= parseFloat(value))
    );
  };

  const addOrEditMovie = (newMovie) => {
    const index = movies.findIndex((movie) => movie.title === newMovie.title);
    if (index !== -1) {
      const updatedMovies = [...movies];
      updatedMovies[index] = newMovie;
      setMovies(updatedMovies);
    } else {
      setMovies([...movies, newMovie]);
    }
  };

  const handleEdit = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleDelete = (movie) => {
    setMovies(movies.filter((m) => m.title !== movie.title));
  };

  return (
    <div className="App">
      <h1>Movie List</h1>
      <Filter
        handleTitleChange={handleTitleChange}
        handleRateChange={handleRateChange}
      />
      <MovieList
        movies={filteredMovies}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <button onClick={() => setIsModalOpen(true)}>Add New Movie</button>
      <AddEditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={addOrEditMovie}
        movie={selectedMovie}
      />
    </div>
  );
}

export default App;
