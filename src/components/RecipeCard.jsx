import React from "react";

export default function RecipeCard({data}) {
    console.log(data)

  return (
    <div className="w-[80%] mx-auto shadow-2xl rounded-xl overflow-hidden">
      <div className="w-full h-[300px] ">
        <img
          src={data.image}
          alt=""
          className="object-cover object-center w-full h-full "
        />
      </div>
      <div className="p-6">
        <h2 className="">{data.name}</h2>
        <span>{data.rating}</span>
      </div>
    </div>
  );
}
