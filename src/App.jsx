import Header from "./components/Header";
import Searchbar from "./components/Search";
import RecipeCard from "./components/RecipeCard";
import Recipes from "./components/Recipes"

function App() {
 
  return (
    <div>
      <Header />
      <Searchbar />
      <Recipes />
    </div>
  );
}

export default App;
