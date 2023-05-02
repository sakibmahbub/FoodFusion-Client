import React from "react";

const Hero = () => {
  return (
    <div className="my-container">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="mx-auto  lg:w-1/2">
          <h1 className="text-2xl lg:text-5xl font-bold mb-3 lg:mb-8 text-center lg:text-left leading-6">
            Explore Mouth-Watering Recipes on
            <span className="text-secondary"> FoodFusion</span>
          </h1>

          <p className="text-gray-500 lg:w-4/6 mb-4 lg:mb-12 text-center lg:text-left">
            Welcome to FoodFusion, where food meets fusion! Our mission is to
            bring together the best of traditional and modern recipes to create
            delicious, mouth-watering dishes that will leave you wanting more.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="btn btn-secondary">Know More</button>
          </div>
        </div>
        <div className="mx-auto lg:w-1/2">
          <img src="pizza.jpg" alt="" className="mx-auto lg:mx-0" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
