import React from "react";
import Hero from "./Hero";
import Chefs from "./Chefs";
import BestCuisine from "./BestCuisine";
import CulinarySkills from "./CulinarySkills";

const Home = () => {
  return (
    <div>
      <Hero />
      <Chefs />
      <CulinarySkills />
      <BestCuisine />
    </div>
  );
};

export default Home;
