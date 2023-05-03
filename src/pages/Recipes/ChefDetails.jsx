import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Recipe from "./Recipe";
import ChefInfo from "./ChefInfo";

const ChefDetails = () => {
  const { id } = useParams();
  const chefRecipes = useLoaderData();

  const [chefs, setChefs] = useState([]);
  const [selectedChef, setSelectedChef] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => {
        setChefs(data);
        const foundChef = data.find((chef) => chef.id === parseInt(id));
        if (foundChef) {
          setSelectedChef(foundChef);
        } else {
          setSelectedChef("not-found");
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!selectedChef) {
    return <div></div>;
  }

  if (selectedChef === "not-found") {
    return <div>Chef not found</div>;
  }

  return (
    <div className="my-container">
      <ChefInfo selectedChef={selectedChef}></ChefInfo>
      <div>
        <h1 className="text-2xl lg:text-4xl font-bold lg:mb-8 flex justify-center lg:text-left leading-6">
          Recipes By The Chef
        </h1>
        <div className="w-full mt-14 mx-auto grid justify-items-center justify-center sm:grid-cols-1 md:grid-cols-2 gap-10">
          {chefRecipes.map((recipe) => (
            <Recipe key={recipe._id} recipe={recipe}></Recipe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
