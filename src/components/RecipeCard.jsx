import React from "react";

export default function RecipeCard() {
  return (
    <div className="w-[80%] mx-auto shadow-2xl rounded-xl overflow-hidden">
      <div className="w-full h-[300px] ">
        <img
          src="download (1).jpeg"
          alt=""
          className="object-cover object-center w-full h-full "
        />
      </div>
      <div className="p-6">
        <h2>Name:rice</h2>
        <span>Rating:2.5</span>
      </div>
    </div>
  );
}
