import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import PokemonDetailContext from "./context/pokemonDetailContext";
import Details from "./pages/details/Details";
import Pokemon from "./pages/pokemon/Pokemon";

function App() {
  const pokemonDetail = useState({});
  return (
    <PokemonDetailContext.Provider value={pokemonDetail}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Pokemon />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </PokemonDetailContext.Provider>
  );
}

export default App;
