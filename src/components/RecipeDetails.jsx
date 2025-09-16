import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function RecipeDetails() {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getSingleRecipes() {
      let res = await fetch(`https://dummyjson.com/recipes/${id}`);
      let data = await res.json();
      // console.log(data);
      setRecipe(data);
    }
    getSingleRecipes();
  }, [id]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="object-cover object-center w-full h-full"
        />
      </div>

      <h1 className="mt-6 text-3xl font-bold text-gray-800">{recipe.name}</h1>

      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Ingredients:
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          {recipe.ingredients?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Instructions:
        </h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {recipe.instructions}
        </p>
      </div>
      <div className="mt-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          ← Go Back
        </button>
      </div>
    </div>
  );
}
