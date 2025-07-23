import React from "react";
import CardImg from "../../assets/cardimg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Example image, replace with actual image paths

const CardList = () => {
  const data = [
    {
      id: 1,
      title: "Mountain Escape",
      description:
        "A peaceful retreat in the mountains with fresh air and stunning views.",
      imageUrl: "https://example.com/images/mountain.jpg",
    },
    {
      id: 2,
      title: "City Lights",
      description:
        "Experience the vibrant life of the city with nightlife, food, and culture.",
      imageUrl: "https://example.com/images/city.jpg",
    },
    {
      id: 3,
      title: "Beach Paradise",
      description:
        "Relax by the sea with golden sands and crystal-clear water.",
      imageUrl: "https://example.com/images/beach.jpg",
    },
    {
      id: 3,
      title: "Beach Paradise",
      description:
        "Relax by the sea with golden sands and crystal-clear water.",
      imageUrl: "https://example.com/images/beach.jpg",
    },
    {
      id: 3,
      title: "Beach Paradise",
      description:
        "Relax by the sea with golden sands and crystal-clear water.",
      imageUrl: "https://example.com/images/beach.jpg",
    },
    {
      id: 3,
      title: "Beach Paradise",
      description:
        "Relax by the sea with golden sands and crystal-clear water.",
      imageUrl: "https://example.com/images/beach.jpg",
    },
    {
      id: 3,
      title: "Beach Paradise",
      description:
        "Relax by the sea with golden sands and crystal-clear water.",
      imageUrl: "https://example.com/images/beach.jpg",
    },
    {
      id: 3,
      title: "Beach Paradise",
      description:
        "Relax by the sea with golden sands and crystal-clear water.",
      imageUrl: "https://example.com/images/beach.jpg",
    },
    {
      id: 3,
      title: "Beach Paradise",
      description:
        "Relax by the sea with golden sands and crystal-clear water.",
      imageUrl: "https://example.com/images/beach.jpg",
    },
  ];
  return (
    <div className="text-white md:px-4">
      <h2 className="pt-10 pb-5 text-lg font-medium">Upcoming</h2>
      <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper">
        {data.map((item, index) => (
          <SwiperSlide key={index} className="max-w-72">
            <img
              src={CardImg}
              className="h-44 w-full object-center object-cover"
              alt="some photo"
            />
            <p className="text-center pt-2">Very good movie</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardList;
