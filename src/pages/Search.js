import "./Search.scss";
import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getInitialPokemonData } from "../redux/reducers/getInitialPokemonData";
import { getPokemonsData } from "../redux/reducers/getPokemonsData";
import { debounce } from "../utils/Debounce";
import PokemonCardGrid from "../components/PokemonCardGrid";
import Loader from "../components/Loader";
import { setLoading } from "../redux/slices/AppSlice";

function Search() {
  const handleChange = debounce((value) => getPokemon(value), 300);
  const isLoading = useAppSelector(({ app: { isLoading } }) => isLoading);

  const dispatch = useAppDispatch();
  const { allPokemon, randomPokemons } = useAppSelector(
    ({ pokemon }) => pokemon
  );

  useEffect(() => {
    dispatch(getInitialPokemonData());
  }, [dispatch]);

  useEffect(() => {
    if (allPokemon) {
      const clonedPokemons = [...allPokemon];
      const randomPokemonsId = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);
      dispatch(getPokemonsData(randomPokemonsId));
    }
  }, [allPokemon, dispatch]);

  useEffect(() => {
    if (randomPokemons) {
      dispatch(setLoading(false));
    }
  }, [randomPokemons, dispatch]);

  const getPokemon = async (value) => {
    if (value.length) {
      const pokemons = allPokemon.filter((pokemon) =>
        pokemon.name.includes(value.toLowerCase())
      );
      dispatch(getPokemonsData(pokemons));
    } else {
      const clonedPokemons = [...allPokemon];
      const randomPokemonsId = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);
      dispatch(getPokemonsData(randomPokemonsId));
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="search">
          <input
            type="text"
            onChange={(e) => handleChange(e.target.value)}
            className="pokemon-searchbar"
            placeholder="Search Pokemon"
          />
          <PokemonCardGrid pokemons={randomPokemons} />
        </div>
      )}
    </>
  );
}

export default Wrapper(Search);
