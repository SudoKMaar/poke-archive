import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import PokemonCardGrid from "../../components/PokemonCardGrid";
import { getPokemonsData } from "../../redux/reducers/getPokemonsData";
import Loader from "../../components/Loader";

function Evolution() {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useAppDispatch();
  const pokemonData = useAppSelector((state) => state.pokemon);

  useEffect(() => {
    const fetchData = async () => {
      const pokemons = pokemonData.currentPokemon.evolution.map(
        ({ pokemon }) => pokemon
      );
      await dispatch(getPokemonsData(pokemons));
      setIsLoaded(true);
    };
    fetchData();
  }, [dispatch, pokemonData.currentPokemon]);

  return (
    <div className="page">
      {isLoaded ? (
        <PokemonCardGrid pokemons={pokemonData.randomPokemons} />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Evolution;
