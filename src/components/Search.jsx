import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
  // const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const navigate = useNavigate();

  // useEffect(() => {
  //   async function getSearch() {
  //     try {
  //       let res = await fetch("https://dummyjson.com/recipes/");
  //       let data = await res.json();
  //       setRecipes(data.recipes);
  //     } catch (err) {
  //       console.error("Failed to fetch recipes:", err);
  //     }
  //   }
  //   getSearch();
  // }, []);

  // const handleSearchClick = () => {
  //   const match = recipes.find((recipe) =>
  //     recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

  //   if (match) {
  //     navigate(`/recipes/${match.id}`);
  //   } else {
  //     alert("Recipe not found");
  //   }
  // };

  return (
    <div className="flex p-5 items-center gap-6 ">
      <input
        type="text"
        // value={searchTerm}
        // onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search recipes..."
        className="border w-full outline-none p-2 rounded border-gray-500 my-[18%]"
      />
      <Search
        className="cursor-pointer"
        // onClick={handleSearchClick}
      />
    </div>
  );
}
