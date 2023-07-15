import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, query, where } from "firebase/firestore";
import { pokemonListRef } from "../../utils/firebaseConfig";
import { defaultImages, images } from "../../utils/PokemonImages";
import { pokemonTypes } from "../../utils/PokemonTypes";

export const getUserPokemons = createAsyncThunk(
  "pokemon/userList",
  async (args, { getState }) => {
    try {
      const state = getState();
      const userInfo = state.app.userInfo;
      if (!userInfo?.email) {
        return;
      }
      const firestoreQuery = query(
        pokemonListRef,
        where("email", "==", userInfo?.email)
      );
      const fetchedPokemons = await getDocs(firestoreQuery);
      if (fetchedPokemons.docs.length) {
        const userPokemons = [];
        fetchedPokemons.forEach(async (pokemon) => {
          const pokemons = await pokemon.data().pokemon;
          let image = images[pokemons.id];
          if (!image) {
            image = defaultImages[pokemons.id];
          }
          const types = pokemons.types.map((name) => ({
            [name]: pokemonTypes[name],
          }));

          userPokemons.push({
            ...pokemons,
            firebaseId: pokemon.id,
            image,
            types,
          });
        });
        return userPokemons;
      }
      return [];
    } catch (err) {
      console.log(err);
    }
  }
);
