import "./MyList.scss";
import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import Login from "../components/Login";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getUserPokemons } from "../redux/reducers/getUserPokemons";
import PokemonCardGrid from "../components/PokemonCardGrid";

const MyList = () => {
  const { userInfo } = useAppSelector(({ app }) => app);
  const { userPokemons } = useAppSelector(({ pokemon }) => pokemon);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserPokemons());
  }, [userInfo, dispatch]);

  return (
    <div className="list">
      {userInfo ? <PokemonCardGrid pokemons={userPokemons} /> : <Login />}
    </div>
  );
};

export default Wrapper(MyList);
