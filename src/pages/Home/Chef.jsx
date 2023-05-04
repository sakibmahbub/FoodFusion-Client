import React from "react";
import { Link } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Chef = ({ chef }) => {
  const { id, picture, name, experience, recipes, likes } = chef;
  return (
    <div className="card w-full lg:card-side bg-base-100 shadow-lg">
      <figure>
        <LazyLoadImage
          src={picture}
          effect="opacity"
          alt="Album"
          className="object-cover w-48 h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title mb-5">{name}</h2>
        <p className="text-base font-semibold">
          Years of experience : <span>{experience}</span>
        </p>
        <p className="text-base font-semibold">
          Numbers of recipes : <span>{recipes}</span>
        </p>
        <p className="text-base font-semibold flex items-center gap-2">
          <FaThumbsUp />
          <span>{likes}</span>
        </p>
        <div className="card-actions justify-start mt-5">
          <Link to={`/chefs/${id}`}>
            <button className="btn btn-outline btn-sm hover:btn-secondary">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chef;
