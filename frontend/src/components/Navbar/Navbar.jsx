import React from "react";
import { HelpCircle, LogOut, Search, Settings } from "lucide-react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router";
import { useAuthStore } from "../../store/authStore";
import { useState } from "react";

const Navbar = () => {
  const { user } = useAuthStore();
  const [showMenu, setShowMenu] = useState(false);

  const avatarUrl = user
    ? `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
        user.name
      )}`
    : "";
  return (
    <nav className="bg-black text-gray-300 flex justify-between items-center p-4 h-20 text-sm md:text-[15px] font-medium text-nowrap">
      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          className="w-24 cursor-pointer brightness-125"
        />
      </Link>
      <ul className="hidden xl:flex space-x-6">
        <li className="cursor-pointer hover:text-[#e50914]">Home</li>
        <li className="cursor-pointer hover:text-[#e50914]">TV Shows</li>
        <li className="cursor-pointer hover:text-[#e50914]">Movies</li>
        <li className="cursor-pointer hover:text-[#e50914]">Anime</li>
        <li className="cursor-pointer hover:text-[#e50914]">Games</li>
        <li className="cursor-pointer hover:text-[#e50914]">New & Popular</li>
        <li className="cursor-pointer hover:text-[#e50914]">Upcoming</li>
      </ul>
      <div className="flex items-center space-x-4 relative">
        <div className="ralative hidden md:inline-flex">
          <input
            type="text"
            className="bg-[#333333] px-4 py-2 rounded-full min-w-72 pr-10 outline-none"
            placeholder="Search..."
          />
          <Search className="absolute top-2.5 right-73 w-5 h-5" />
        </div>
        <button className="bg-[#e50914] px-5 py-2 text-white cursor-pointer">
          Get AI Movie Picks
        </button>

        {!user ? (
          <Link to={"/signin"}>
            <button className="border border-[#333333] py-2 px-4 cursor-pointer">
              Sign In
            </button>
          </Link>
        ) : (
          <div className="text-white">
            <img
              src={avatarUrl}
              alt="Your avatar"
              className="w-10 h-10 rounded-full border-2 border-[#e50914] cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
            {showMenu && (
              <div className="absolute right-0 mt-2 bg-[#232323] bg-opacity-95 rounded-lg z-50 shadow-lg py-4 px-3 flex flex-col gap-2 border border-[#333333]">
                <div className="flex flex-col items-center mb-2">
                  <span className="text-white font-semibold text-base">
                    {user.name}
                  </span>
                  <span className="text-xs text-gray-400">{user.email}</span>
                </div>
                <button className="flex items-center px-4 py-3 rounded-lg text-white bg-[#181818] hover:bg-[#1d1c1c] gap-3 cursoir-pointer">
                  <HelpCircle className="w-5 h-5" />
                  Help Center
                </button>
                <button className="flex items-center px-4 py-3 rounded-lg text-white bg-[#181818] hover:bg-[#1d1c1c] gap-3 cursoir-pointer">
                  <Settings className="w-5 h-5" />
                  Settings
                </button>
                <button className="flex items-center px-4 py-3 rounded-lg text-white bg-[#181818] hover:bg-[#1d1c1c] gap-3 cursoir-pointer">
                  <LogOut className="w-5 h-5" />
                  Log Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
