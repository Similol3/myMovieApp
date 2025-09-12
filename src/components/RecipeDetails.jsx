import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

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
    <div className="">
      <div className="w-full h-[300px]">
        <img src={recipe.image} alt="" className="object-cover object-center w-full h-full"/>
      </div>
      <div>
        <h1>{recipe.name}</h1>
      </div>
      <div>
        <span>{recipe.instructions}</span>
      </div>
      <div><p>{recipe.ingredients}</p></div>
      <Link to="/" className="border w-fit px-2 py-0.5 bg-red-400 text-white rounded mx-[75%] inline-block m">GoBack</Link>
    </div>
  );
}
