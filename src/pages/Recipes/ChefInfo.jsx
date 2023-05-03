import React from "react";
import { FaHamburger, FaThumbsUp } from "react-icons/fa";

const ChefInfo = ({ selectedChef }) => {
  const { picture, name, experience, recipes, likes, bio } = selectedChef;

  return (
    <div className="mb-20">
      <div className="hero rounded-lg p-10 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="my-5  lg:w-4/5">{bio}</p>
            <p className="mb-5 text-base flex items-center gap-2">
              People Liked : <FaThumbsUp />
              <span className="font-semibold">{likes}</span>
            </p>
            <p className="text-base mb-5 flex items-center gap-2">
              Number of recipes :
              <span className="font-semibold">{recipes}</span>
            </p>
            <p className="text-base mb-8 flex items-center gap-2">
              Years of experience :
              <span className="font-semibold">{experience}</span>
            </p>
            <button className="btn btn-secondary">Contact now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefInfo;
