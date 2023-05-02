import React from "react";
import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";

const ChefDetails = () => {
  const chefRecipes = useLoaderData();
  return (
    <div className="my-container">
      <h1>Recipes By The Chef</h1>
      <div className="w-full mt-10 mx-auto grid justify-items-center justify-center sm:grid-cols-1 md:grid-cols-2 gap-20">
        {chefRecipes.map((recipe) => (
          <Recipe key={recipe._id} recipe={recipe}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default ChefDetails;
