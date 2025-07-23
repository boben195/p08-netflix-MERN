import React from "react";
import HeroBg from "../../assets/herobg2.jpg";
import { Bookmark, Play } from "lucide-react";

const Hero = () => {
  return (
    <div className="text-white relative">
      <img
        src={HeroBg}
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
