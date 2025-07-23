import React, { useEffect, useState } from "react";
import CardImg from "../../assets/cardimg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Example image, replace with actual image paths

const CardList = ({ title, category }) => {
  const [data, setData] = useState([]);
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
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setData(res.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="text-white md:px-4">
      <h2 className="pt-10 pb-5 text-lg font-medium">{title}</h2>
      <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper">
        {data.map((item, index) => (
          <SwiperSlide key={index} className="max-w-72">
            <img
              src={`https://image.tmdb.org/t/p/w500/${
                item.backdrop_path || item.poster_path
              }`}
              className="h-44 w-full object-center object-cover"
              alt="some photo"
            />
            <p className="text-center pt-2">{item.original_title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardList;
