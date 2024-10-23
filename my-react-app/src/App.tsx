import "./App.css";
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const pokemonIndexLess = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  const pokemonIndexPlus = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  return (
    <div>
      <PokemonCard
        name={pokemonList[pokemonIndex].name}
        imgSrc={pokemonList[pokemonIndex].imgSrc}
      />
      🎅🎅🎅
      {pokemonIndex > 0 && (
        <button type="button" onClick={pokemonIndexLess}>
          Précédent
        </button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button type="button" onClick={pokemonIndexPlus}>
          Suivant
        </button>
      )}
    </div>
  );
}

export default App;
