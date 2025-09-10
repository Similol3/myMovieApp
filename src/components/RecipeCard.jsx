import React from "react";

export default function RecipeCard({data}) {
    console.log(data)

  return (
    <div className="w-[90%] mx-auto shadow-2sm rounded-xl overflow-hidden">
      <div className="w-full h-[300px] ">
        <img
          src={data.image}
          alt=""
          className="object-cover object-center w-full h-full "
        />
      </div>
      <div className="p-6">
        <h2 className="font-semibold text-2xl mb-2">{data.name}</h2>
        <span className="border w-fit px-2 py-0.5 bg-red-400 text-white rounded">{data.rating}</span>
      </div>
    </div>
  );
}
