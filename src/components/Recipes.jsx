import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

export default function Recipes() {
  const [allRecipes, SetAllRecipes] = useState([]);
  useEffect(() => {
    async function getAllRecipes() {
      let res = await fetch("https://dummyjson.com/recipes");
      if (!res.ok) {
        throw new Error("Problem fetching Recipes");
      }
      let data = await res.json();
      SetAllRecipes(data.recipes);
    //   console.log(data.recipes);
    }

    getAllRecipes();
  }, []);

  return (
    <div className="flex flex-col gap-10 ">
      {allRecipes.map((item, index) => (
        <RecipeCard />
      ))}
    </div>
  );
}
