import Header from "./components/Header";
import Searchbar from "./components/Search";
import Recipes from "./components/Recipes";
import { BrowserRouter, Route, Routes } from "react-router";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Searchbar />
              <Recipes />
            </div>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
