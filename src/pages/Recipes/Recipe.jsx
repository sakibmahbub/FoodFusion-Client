import React, { useState, useEffect } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Recipe = ({ recipe }) => {
  const {
    _id,
    img,
    recipe_name,
    chef_id,
    ingredients,
    cooking_method,
    rating,
  } = recipe;

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(true);
  };

  useEffect(() => {
    if (isFavorite) {
      toast.success(`You have added ${recipe_name} to your favorite recipes!`, {
        position: "top-right",
      });
    }
  }, [isFavorite, recipe_name]);

  return (
    <div className="card card-compact w-full bg-base-100 shadow-lg">
      <figure>
        <LazyLoadImage src={img} effect="opacity" alt={recipe_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipe_name}</h2>
        <p>
          <span className="font-semibold">Ingredients:</span> {ingredients}
        </p>
        <p>
          <span className="font-semibold">Cooking method:</span>{" "}
          {cooking_method}
        </p>
        <div className="flex justify-start items-center gap-5 mt-3">
          <div className="mt-1 flex justify-start items-center gap-2">
            <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
            <span>{rating}</span>
          </div>
          <button
            className="btn btn-outline btn-sm mt-1 hover:btn-secondary"
            disabled={isFavorite}
            onClick={handleFavoriteClick}
          >
            {isFavorite ? "Favorited!" : "Favorite"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
