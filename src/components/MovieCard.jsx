import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

function MovieCard(props) {
  const { movie } = props;
  return (
    // <div className="md:ml-[15rem]">

    <div>
      <div className="card relative w-full md:w-60 h-[410px] md:h-[360px] my-3 mx-4 md:my-5 md:mx-0 cursor-pointer rounded-xl overflow-hidden">
        <div className="absolute bottom-0 w-full flex justify-between items-end p-3 z-20">
          <h1 className="text-white text-xl font-semibold  break-normal break-words">
            {movie.name}
          </h1>

          {(movie.rating.average || 0) > 7 ? (
            <h1 className="font-bold text-green-500 p-2 bg-zinc-900 rounded-full">
              {(movie.rating.average || 0).toFixed(1)}
            </h1>
          ) : (movie.rating.average || 0) > 5.5 ? (
            <h1 className="font-bold text-orange-400 p-2 bg-zinc-900 rounded-full">
              {(movie.rating.average || 0).toFixed(1)}
            </h1>
          ) : (
            <h1 className="font-bold text-red-600 p-2 bg-zinc-900 rounded-full">
              {(movie.rating.average || 0).toFixed(1)}
            </h1>
          )}
        </div>

        <Link
          to={`/${movie.id}`}
          className="h-full w-full shadow absolute z-10"
        ></Link>

        <div>
          {movie.image.original === null ? (
            <img className="img object-cover" src={noimage} />
          ) : (
            <img className="img object-cover" src={movie.image.original}></img>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
