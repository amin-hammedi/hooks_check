import { useState } from "react";
import "./App.css";
import Movielist from "./components/Movielist";
import { moviesData } from "./data";
import Search from "./components/Search";
import Adding from "./components/Adding";

function App() {
  const [movie, setMovie] = useState(moviesData);
  const [searchText, setsearchText] = useState("");
  const [rating, setRating] = useState(1);
  const handleDelete = (ID) => setMovie(movie.filter((el) => el.id !== ID));
  const handleSearchText = (x) => setsearchText(x);
  const handleRating = (x) => setRating(x);
  const handleEdit = (editedone) =>
    setMovie(movie.map((el) => (el.id === editedone.id ? editedone : el)));
  const handleadd = (newone) => setMovie([...movie, newone]);

  return (
    <div className="App">
      <div className="writer" style={{ color: "white" }}></div>
      <Search
        searchText={searchText}
        handleSearchText={handleSearchText}
        rating={rating}
        handleRating={handleRating}
      />
      <Adding handleadd={handleadd} />
      <Movielist
        film={movie.filter(
          (el) =>
            el.name.toUpperCase().includes(searchText.toUpperCase()) &&
            el.rating >= rating
        )}
        deletefunction={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
