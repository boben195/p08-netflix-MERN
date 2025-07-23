import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Play } from "lucide-react";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjQ1NzM2MjhiNTMyMGI5ZDg4OTdhMDU1NGIxZTJkZSIsIm5iZiI6MTcxMjIyNzMwMS43MjcsInN1YiI6IjY2MGU4M2U1MzNhMzc2MDE2NDgyNmQ5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kcBS_BDH-IwwDAmiuT3hifFsiLsDHrnfNF2t-q4kIFw",
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((res) => res.json())
      .then((res) => setMovie(res))
      .catch((err) => console.error(err));
  }, [id]);

  if (!movie) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-xl text-red-500">Loading...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#181818] text-white">
      <div
        className="relative h-[60vh] flex items-end"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent">
          <div className="relative z-10 p-8 gap-8 flex items-end">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="image of your movie"
              className="rounded-lg w-48 hidden md:block shadow-lg"
            />
            <div>
              <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
              <div className="flex items-center gap-4 mb-2">
                <span>⭐ {movie.vote_average?.toFixed(1)}</span>
                <span>{movie.release_date}</span>
                <span>{movie.runtime} min</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
              <p className="max-w-2xl text-gray-200">{movie.overview}</p>
              <button className="flex items-center justify-center bg-[#e50914] hover:bg-red-400 text-white px-4 py-3 rounded-full cursor-pointer tesxt-sm md:text-base mt-2 md:mt-4">
                <Play className="mr-2 w-4 h-5 md:w-5 md:h-5" /> Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
