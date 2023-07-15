import React from "react";
import Info from "../../components/Info";
import PokemonContainer from "../../components/PokemonContainer";
import { useAppSelector } from "../../redux/hooks";

function Description() {
  const pokemonData = useAppSelector(({ pokemon }) => pokemon.currentPokemon);

  return (
    <div>
      {pokemonData && (
        <>
          <Info data={pokemonData} />
          <PokemonContainer image={pokemonData.image} />
        </>
      )}
    </div>
  );
}

export default Description;
