import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [movies, setMovies] = useState([]);

  // let movie = {
  //   id: 12,
  //   title: "Title1",
  //   name: "Name1",
  //   rating: {
  //     average: 6,
  //   },
  //   image: {
  //     medium:
  //       "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
  //   },
  //   // image.medium:
  //   //   "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
  // };

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows")
      .then((response) => {
        setMovies(response.data);
        // console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  // movies.map((movie) => {
  //   console.log(movie);
  // });

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
