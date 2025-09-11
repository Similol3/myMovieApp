import React from "react";

export default function RecipeCard({ data }) {
  console.log(data);

  return (
    <div className="w-[90%] mx-auto rounded-xl overflow-hidden shadow-xl">
      <div className="w-full h-[300px] ">
        <img
          src={data.image}
          alt=""
          className="object-cover object-center w-full h-full "
        />
      </div>
      <div className="flex flex-col">
      <div className="p-6">
        <h2 className="font-semibold text-2xl mb-2">{data.name}</h2>
        <h3 className="font-medium">Cuisine: {data.cuisine}</h3>
        <h3 className="font-medium">difficulty: {data.difficulty}</h3>
        <span >Review: </span>
        <span className="font-extralight">{data.reviewCount}</span>
        <div>
        <span className="border w-fit px-2 py-0.5 bg-red-400 text-white rounded mx-[85%]">
          {data.rating}
        </span>
        </div>
      </div>
      </div>
    </div>
  );
}
