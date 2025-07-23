import React from "react";
import TextField from "@mui/material/TextField";

const Navbar = () => {
  return (
    <nav>
      <label htmlFor="">Logo</label>
      <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>Anime</li>
        <li>Games</li>
        <li>New & Popular</li>
        <li>Upcoming</li>
      </ul>
      <div>
        <div>
          <input type="text" placeholder="Search..." />
        </div>
        <button>Get AI Movie Picks</button>
        <button>Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
