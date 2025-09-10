import React from "react";
import RecipeCard from "./RecipeCard";

export default function Recipes() {
  return (
    <div className="flex flex-col gap-10 ">
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </div>
  );
}
