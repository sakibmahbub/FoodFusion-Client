import React from "react";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const { id, picture, name, experience, recipes, likes } = chef;
  return (
    <div className="card w-full lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={picture} className="object-cover w-48 h-full " alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title mb-5">{name}</h2>
        <p className="text-base font-semibold">
          Years of experience : <span>{experience}</span>
        </p>
        <p className="text-base font-semibold">
          Numbers of recipes : <span>{recipes}</span>
        </p>
        <p className="text-base font-semibold">
          Likes : <span>{likes}</span>
        </p>
        <div className="card-actions justify-start mt-5">
          <Link to={`/chefs/${id}`}>
            <button className="btn btn-outline">View Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chef;
