import React from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/Moviepage/MoviePage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/movie/:id"} element={<MoviePage />} />
      </Routes>
    </div>
  );
};

export default App;
