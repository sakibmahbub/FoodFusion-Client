import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Recipe = ({ recipe }) => {
  const {
    _id,
    img,
    recipe_name,
    chef_id,
    ingredients,
    cooking_method,
    rating,
    favorite,
  } = recipe;
  return (
    <div className="card w-full bg-secondary shadow-xl image-full">
      <figure>
        <img src="" alt="food" />
      </figure>
      <div className="card-body">
        <h2 className="card-title mb-3">{recipe_name}</h2>
        <p>
          <span className="font-semibold">Ingredients : </span>
          {ingredients}
        </p>
        <p className="mt-2">
          <span className="font-semibold">Cooking method : </span>
          {cooking_method}
        </p>
        <div className="mt-1 flex justify-start items-center gap-2">
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
          <span>{rating}</span>
        </div>
        <div className="card-actions justify-start">
          <button className="btn btn-outline text-white mt-5">Favorite </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
