interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (
    index: number
  ) => void /*Pour typer des fonctions on doit typer les parametres attendus + 
  typer les valeurs qu'elle retournent, ici elle ne retourne rien donc on utilise après la fleche le key word void qui signifie "ne retourne rien*/;
  pokemonList: Pokemon[];
}

export default function NavBar({
  pokemonIndex,
  setPokemonIndex,
  pokemonList,
}: NavBarProps) {
  const pokemonIndexLess = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  const pokemonIndexPlus = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  return (
    <div>
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
