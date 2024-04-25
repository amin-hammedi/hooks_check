import React from "react";
import MovieCard from "./MovieCard";

const Movielist = ({ film, deletefunction, handleEdit }) => {
  return (
    <div className="card">
      {React.Children.toArray(
        film.map((el) => (
          <MovieCard
            list={el}
            functiondelete={deletefunction}
            handleEdit={handleEdit}
          />
        ))
      )}
    </div>
  );
};

export default Movielist;
