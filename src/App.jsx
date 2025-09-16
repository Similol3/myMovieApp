import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header";
import RecipeDetails from "./components/RecipeDetails";
import Recipes from "./components/Recipes";
import Searchbar from "./components/Search";
import { useState } from "react";

function App() {
  const [allRecipes, setAllRecipes] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSearch() {
    try {
      setIsLoading(true);
      let res = await fetch(
        `https://dummyjson.com/recipes/search?q=${searchItem}`
      );
      let data = await res.json();
      console.log(data.recipes);
      setAllRecipes(data.recipes); // Update the state with the fetched recipes
    } catch (err) {
      console.error("Failed to fetch recipes:", err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Searchbar
                searchItem={searchItem}
                setSearchItem={setSearchItem}
                handleSearch={handleSearch}
              />
              <Recipes
                allRecipes={allRecipes}
                setAllRecipes={setAllRecipes}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            </div>
          }
        />
        <Route path="/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
