import React, { useEffect, useState } from "react";
import Chef from "./Chef";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="my-container">
      <h1 className="text-2xl lg:text-4xl font-bold mb-3 lg:mb-8 flex justify-center lg:text-left leading-6">
        The Chefs Behind the Recipes
      </h1>
      <div className="w-full mt-10 mx-auto grid justify-items-center justify-center sm:grid-cols-1 md:grid-cols-2 gap-20">
        {chefs.map((chef) => (
          <Chef key={chef.id} chef={chef}></Chef>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
