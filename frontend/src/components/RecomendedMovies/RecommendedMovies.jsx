import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const RecommendedMovies = ({ movieTitles }) => {
  //   const options = { method: "GET", headers: { accept: "application/json" } };

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjQ1NzM2MjhiNTMyMGI5ZDg4OTdhMDU1NGIxZTJkZSIsIm5iZiI6MTcxMjIyNzMwMS43MjcsInN1YiI6IjY2MGU4M2U1MzNhMzc2MDE2NDgyNmQ5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kcBS_BDH-IwwDAmiuT3hifFsiLsDHrnfNF2t-q4kIFw",
    },
  };

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async (title) => {
    const encodedTitle = encodeURIComponent(title);
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodedTitle}&include_adult=false&language=en-US&page=1`;
    try {
      const responce = await fetch(url, options);
      const data = await responce.json();
      return data.results?.[0] || null;
    } catch (error) {
      console.log("Error fetching movie data:", error);
      return null;
    }
  };

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      const results = await Promise.all(
        movieTitles.map((title) => fetchMovies(title))
      );
      setMovies(results.filter(Boolean));
      setLoading(false);
    };

    if (movieTitles?.length) {
      loadMovies();
    }
  }, [movieTitles]);

  if (loading) {
    return <p>Loading...</p>;
  }
  console.log(movies);

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {movies.map((movie) => (
        <Link
          to={`/movie/${movie.id}`}
          key={movie.id}
          className="bg-[232323] rounded-lg overflow-hidden"
        >
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              className="w-full h-48 object-cover"
            />
          ) : (
            <></>
          )}
        </Link>
      ))}
    </div>
  );
};

export default RecommendedMovies;
