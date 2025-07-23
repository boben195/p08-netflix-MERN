import React from "react";
import Hero from "../../components/Hero/Hero";
import CardList from "../../components/CardList/CardList";

const HomePage = () => {
  return (
    <div className="p-5">
      <Hero />
      <CardList />
    </div>
  );
};

export default HomePage;
