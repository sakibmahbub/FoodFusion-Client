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

          <p className="text-gray-500 lg:w-4/5 mb-4 lg:mb-12 text-center lg:text-left">
            FoodFusion is a website dedicated to sharing delicious and
            innovative recipes from around the world. Our recipes are created
            and tested by our team of experienced chefs, and we're always adding
            new dishes to our collection. <br />
            Whether you're a novice cook or a seasoned pro, our recipes are
            designed to be easy to follow and accessible to everyone. We also
            provide step-by-step videos to guide you through the cooking
            process, so you can create restaurant-quality meals in your own
            home. So if you're looking for inspiration in the kitchen, be sure
            to check out our website for a wide range of mouth-watering recipes!
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="btn btn-secondary">Know More</button>
          </div>
        </div>
        <div className="mx-auto lg:w-1/2 shadow-lg">
          <img
            src="https://i.ibb.co/gDHDsXd/8.jpg"
            alt=""
            className="mx-auto lg:mx-0 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
