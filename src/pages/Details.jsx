import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import noimage from "../assets/images/no-image.jpg";

export default function Details() {
  const { id } = useParams();

  const [movie, setMovie] = useState();

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        setMovie(response.data);
      })

      .catch((error) => {
        console.error("Error fetching movie: ", error);
      });
  }, []);

  return (
    <>
      {movie && (
        <>
          <div className="relative h-auto md:h-[82vh] flex justify-center">
            <div className="h-full w-full shadowbackdrop absolute"></div>
            <h1 className="text-white absolute bottom-0 p-10 text-2xl md:text-6xl font-bold text-center">
              {movie.name}
            </h1>
            {movie.image.original === null ? (
              <img src={noimage} className="h-full" />
            ) : (
              <img src={movie.image.original} className="h-full" />
            )}
          </div>

          <h2
            className="text-white text-center pt-5 px-3 md:px-60 font-Roboto text-[18px]"
            dangerouslySetInnerHTML={{ __html: movie.summary }}
          />

          <div className="text-blue-100 font-semibold my-3 flex justify-center">
            <h2 className="bg-blue-600/30 border-2 border-blue-700 py-2 px-3 rounded-full">
              Release Date : {movie.premiered}
            </h2>
          </div>

          <div className="flex justify-center flex-wrap">
            {movie.genres.map((genre) => (
              <>
                <div
                  key={genre}
                  className="text-white font-semibold bg-gray-800 rounded-full px-4 py-1 m-2"
                >
                  {genre}
                </div>
              </>
            ))}
          </div>
        </>
      )}
    </>
  );
}
