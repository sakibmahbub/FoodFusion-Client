import React from "react";
import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";
import ChefInfo from "./ChefInfo";

const ChefDetails = () => {
  const chefRecipes = useLoaderData();
  return (
    <div className="my-container">
      <ChefInfo></ChefInfo>
      <div>
        <h1 className="text-2xl lg:text-4xl font-bold mb-3 lg:mb-8 flex justify-center lg:text-left leading-6">
          Recipes By The Chef
        </h1>
        <div className="w-full mt-10 mx-auto grid justify-items-center justify-center sm:grid-cols-1 md:grid-cols-2 gap-10">
          {chefRecipes.map((recipe) => (
            <Recipe key={recipe._id} recipe={recipe}></Recipe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
