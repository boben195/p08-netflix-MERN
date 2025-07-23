import React from "react";
import Hero from "../../components/Hero/Hero";
import CardList from "../../components/CardList/CardList";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="p-5">
      <Hero />
      <CardList title="Now playing" category="now_playing" />
      <CardList title="Top Rated" category="top_rated" />
      <CardList title="Popular" category="popular" />
      <CardList title="Upcoming" category="upcoming" />
      <Footer />
    </div>
  );
};

export default HomePage;
