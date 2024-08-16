import React from "react";

const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mt-4 mr-4 px-3 py-1 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body text-white flex flex-xol items-center">
        <h2 className="text-xl font-bold">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline bg-slate-200 border-orange-400 border-0 border-b-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
