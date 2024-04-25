import React, { useState } from "react";
import Modal from "react-modal";
import StarRating from "./StarRating";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const Adding = ({ handleadd }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState(1);
  const handleRating = (x) => setRating(x);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      name,
      img: image,
      rating,
    };
    handleadd(newMovie);
    closeModal();
    setImage("");
    setRating(1);
    setName("");
  };
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className="ciu">
        Add
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <label>Movie Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Movie Poster</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <StarRating rating={rating} handleRating={handleRating} />
          <div>
            <button className="btn" onClick={closeModal}>
              Cancel
            </button>
            <button className="btn" type="submit">
              Confirme
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Adding;
