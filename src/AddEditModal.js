import React, { useState } from "react";

function AddEditModal({ isOpen, onClose, onSave, movie }) {
  const [title, setTitle] = useState(movie ? movie.title : "");
  const [description, setDescription] = useState(
    movie ? movie.description : ""
  );
  const [posterURL, setPosterURL] = useState(movie ? movie.posterURL : "");
  const [rating, setRating] = useState(movie ? movie.rating : "");

  const handleSave = () => {
    onSave({ title, description, posterURL, rating });
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <h2>{movie ? "Edit Movie" : "Add Movie"}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={handleSave}>
        {movie ? "Save Changes" : "Add Movie"}
      </button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

export default AddEditModal;
