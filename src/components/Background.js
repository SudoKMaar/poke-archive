import "./Background.scss";
import bg from "../assets/PokeArchiveBackground.jpg";
import React from "react";

export default function Background() {
  return (
    <div className="background">
      <img src={bg} alt="" className="bg" />
    </div>
  );
}
