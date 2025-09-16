import React, { useEffect } from "react";
import RecipeCard from "./RecipeCard";

export default function Recipes({
  allRecipes,
  setAllRecipes,
  isLoading,
  setIsLoading,
}) {
  useEffect(() => {
    async function getAllRecipes() {
      try {
        setIsLoading(true);
        let res = await fetch("https://dummyjson.com/recipes");
        if (!res.ok) {
          throw new Error("Problem fetching Recipes");
        }
        let data = await res.json();
        setAllRecipes(data.recipes);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    getAllRecipes();
  }, []);

  if (isLoading) {
    return (
      <h2 className="text-center text-3xl font-semibold my-10">Loading...</h2>
    );
  }

  if (allRecipes.length === 0) {
    return (
      <h2 className="text-center text-3xl font-semibold my-10">
        No Recipes Found
      </h2>
    );
  }

  return (
    <div className="flex flex-col gap-10 ">
      {allRecipes.map((item) => (
        <RecipeCard data={item} key={item.id} />
      ))}
    </div>
  );
}
