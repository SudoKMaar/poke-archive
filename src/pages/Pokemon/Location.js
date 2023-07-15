import "./Location.scss";
import React from "react";
import { useAppSelector } from "../../redux/hooks";

function Locations() {
  const pokemonData = useAppSelector((state) => state.pokemon.currentPokemon);

  return (
    <div className="pokemon-locations">
      <ul className="pokemon-locations-list">
        {pokemonData?.encounters.map((encounter) => (
          <li key={encounter} className="pokemon-location">
            {encounter}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Locations;
