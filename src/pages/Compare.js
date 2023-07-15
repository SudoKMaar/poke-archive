import "./Compare.scss";
import React from "react";
import Wrapper from "../components/Wrapper";
import CompareContainer from "../components/CompareContainer";
import { useAppSelector } from "../redux/hooks";

const Compare = () => {
  const { compareQueue } = useAppSelector((state) => state.pokemon);

  return (
    <div className="compare">
      <CompareContainer
        pokemon={compareQueue[0]}
        isEmpty={compareQueue.length < 1}
      />
      <CompareContainer
        pokemon={compareQueue[1]}
        isEmpty={compareQueue.length < 2}
      />
    </div>
  );
};

export default Wrapper(Compare);
