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
  const handleClick = (pokemonName: string) => {
    const pokemonToFind = pokemonList.find((pokemon) => {
      return pokemon.name === pokemonName;
    });
    if (pokemonToFind) {
      /*car un find peut renvoyer un undefinded car l'element recherché peut n pas existé donc on verifie si il existe bien pour que ts soit content 👍*/
      pokemonIndex = pokemonList.indexOf(pokemonToFind);
      setPokemonIndex(pokemonIndex);
    }
    // console.log({ pokemonToFind });
    // console.log({ pokemonName });
    // console.log("C'est quoi pokemonIndex ? ", pokemonIndex);
    // pokemonToFind.
  };

  return (
    <div>
      {pokemonList.map((pokemon) => (
        <button
          key={pokemon.name}
          type="button"
          onClick={() => handleClick(pokemon.name)}
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}
