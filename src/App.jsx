import Header from "./components/Header";
import Searchbar from "./components/Search";
import Recipes from "./components/Recipes";
import { BrowserRouter, Route, Routes } from "react-router";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
