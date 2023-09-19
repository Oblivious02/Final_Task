import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <div className="w-full bg-[#10141e] md:p-10 mb-20 md:mb-0">
      <div className="flex flex-wrap relative justify-evenly md:justify-around">
        {movies.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default Home;
