import React from "react";

const BestCuisine = () => {
  return (
    <div className="my-container">
      <h1 className="text-2xl lg:text-4xl font-bold mb-3 lg:mb-8 flex justify-center lg:text-left leading-6">
        Most Popular American Cuisines
      </h1>
      <div className="w-full mt-10 mx-auto grid justify-items-center justify-center sm:grid-cols-1 md:grid-cols-3 gap-10">
        <div className="card card-compact w-96 bg-base-100 shadow-lg">
          <figure>
            <img
              className="w-full h-48"
              src="https://i.ibb.co/NxdzFxh/1.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Beef Steak</h2>
            <p>
              Beef steak is a beloved dish around the world, prized for its
              tender texture and rich, meaty flavor. It can be prepared in a
              variety of ways, from pan-searing to grilling, and is often served
              with sides like mashed potatoes, vegetables, or a crisp salad.
            </p>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full h-48"
              src="https://i.ibb.co/fMKQrQb/4.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Gourmet Burger</h2>
            <p>
              Gourmet burgers are a more upscale version of the classic
              fast-food burger, featuring high-quality ingredients like
              grass-fed beef, artisanal cheese, and house-made sauces. They
              often come with inventive toppings like caramelized onions,
            </p>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full h-48"
              src="https://i.ibb.co/F8L7DrL/3.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Strawberry Pudding</h2>
            <p>
              Strawberry pudding is a sweet and creamy dessert made with fresh
              or frozen strawberries, sugar, cornstarch, and milk or cream. It
              is often served chilled and garnished with whipped cream and fresh
              berries for a refreshing treat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestCuisine;
