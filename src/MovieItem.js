// MovieItem.js
import React, { useState } from "react";

const MovieItem = ({ movie, index, deleteMovie, editMovie }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedName, setEditedName] = useState(movie.name);
  const [editedRating, setEditedRating] = useState(movie.rating);

  const handleEdit = () => {
    editMovie(index, { name: editedName, rating: editedRating });
    setShowEditModal(false);
  };

  return (
    <div>
      <h3>{movie.name}</h3>
      <p>Rating: {movie.rating}</p>
      <button onClick={() => deleteMovie(index)}>Delete</button>
      <button onClick={() => setShowEditModal(true)}>Edit</button>

      {/* Edit Modal */}
      {showEditModal && (
        <div>
          <h2>Edit Movie</h2>
          <form>
            <input
              type="text"
              placeholder="Movie Name"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Rating"
              value={editedRating}
              onChange={(e) => setEditedRating(e.target.value)}
            />
            <button onClick={handleEdit}>Save</button>
            <button onClick={() => setShowEditModal(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MovieItem;
