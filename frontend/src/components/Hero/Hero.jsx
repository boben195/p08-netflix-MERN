import React, { useEffect, useState } from "react";
import HeroBg from "../../assets/herobg2.jpg";
import { Bookmark, Play } from "lucide-react";

const Hero = () => {
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
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.results && res.results.length > 0) {
          const randomIndex = Math.floor(Math.random() * res.results.length);
          setMovie(res.results[randomIndex]);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  if (!movie) {
    return <p>Loading...</p>;
  }
  //WHERE IS MY RETURN
  return (
    <div className="text-white relative">
      <img
        src={`https://image.tmdb.org/t/p/original/${
          movie?.backdrop_path || movie?.poster_path || HeroBg
        }`}
        className="w-full rounded-2xl h-[520px] object-center object-cover"
        alt="hero bg-img"
      />
      <div className="flex space-x-2 md:space-x-4 absolute bottom-3 left-4 md:bottom-8 md:left-10 font-medium">
        <button className="flex items-center justify-center bg-white hover:bg-gray-200 text-[#e50914] px-4 py-3 rounded-full cursor-pointer tesxt-sm md:text-base">
          <Bookmark className="mr-2 w-4 h-5 md:w-5 md:h-5" /> Save for later
        </button>
        <button className="flex items-center justify-center bg-[#e50914] hover:bg-red-400 text-white px-4 py-3 rounded-full cursor-pointer tesxt-sm md:text-base">
          <Play className="mr-2 w-4 h-5 md:w-5 md:h-5" /> Watch Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
