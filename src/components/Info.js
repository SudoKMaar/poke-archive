import "./Info.scss";
import React, { useEffect } from "react";
import { pokemonTypes } from "../utils/PokemonTypes";
import { useAppDispatch } from "../redux/hooks";
import { addPokemonToList } from "../redux/reducers/addPokemonToList";
import { setPokemonTab } from "../redux/slices/AppSlice";
import { pokemonTabs } from "../utils/Constants";

export default function Info({ data }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const progressBars = document.querySelectorAll("progress");
    progressBars.forEach((progressBar) => {
      progressBar.style.width = "10rem";
    });
  }, []);

  const createStatsArray = (types, statType) => {
    const statsSet = new Set();
    types.forEach((type) => {
      pokemonTypes[type][statType].forEach((stat) => {
        if (!statsSet.has(stat)) {
          statsSet.add(stat[0].toUpperCase() + stat.slice(1));
        }
      });
    });
    return Array.from(statsSet);
  };

  return (
    <div className="info">
      <div className="details">
        <h1 className="name">{data?.name}</h1>
        <h3>Type: {data?.types.join(" - ")}</h3>
        <h3>Evolution: {data?.evolutionLevel}</h3>
        <button onClick={() => dispatch(setPokemonTab(pokemonTabs.evolution))}>
          See next evolution
        </button>
      </div>
      <div className="stats">
        <ul>
          {data?.stats.map((stat) => (
            <li key={stat.name}>
              {stat.name}: {stat.value}
              <progress max={100} value={stat.value} />
            </li>
          ))}
        </ul>
      </div>
      <div className="battle-stats">
        <ul>
          <li>
            <span>Strengths:</span>
            <span>{createStatsArray(data?.types, "strength").join(", ")}</span>
          </li>
          <li>
            <span>Weakness:</span>
            <span>{createStatsArray(data?.types, "weakness").join(", ")}</span>
          </li>
          <li>
            <span>Resistant:</span>
            <span>
              {createStatsArray(data?.types, "resistance").join(", ")}
            </span>
          </li>
          <li>
            <span>Vulnerable:</span>
            <span>
              {createStatsArray(data?.types, "vulnerable").join(", ")}
            </span>
          </li>
        </ul>
        <button
          onClick={() => dispatch(addPokemonToList(data))}
          className="add-pokemon"
        >
          Add Pokemon
        </button>
      </div>
    </div>
  );
}
