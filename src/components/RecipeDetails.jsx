import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function RecipeDetails() {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function getSingleRecipes() {
      let res = await fetch(`https://dummyjson.com/recipes/${id}`);
      let data = await res.json();
      console.log(data);
      setRecipe(data);
    }
    getSingleRecipes();
  }, []);
  return (
    <div className="w-[100%] mx-auto rounded-xl overflow-hidden shadow-xl">
      <div className="w-full h-[300px]">
        <img src={recipe.image} alt=""  className="object-cover object-center w-full h-full "/>
      </div>
      <div>
        <h1>{recipe.name}</h1>
      </div>
      <div>
        <span>{recipe.instructions}</span>
      </div>
      <div><p>{recipe.ingredients}</p></div>
    </div>
  );
}
