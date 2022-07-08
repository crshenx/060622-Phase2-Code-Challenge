import React from "react";
import { getRandomPlaneteer } from "../data/planeteers";

function RandomButton({ randomButton }) {
  function handleClick() {
    const randomPlaneteer = getRandomPlaneteer();
    randomButton(randomPlaneteer);
  }

  return (
    <div className="centered">
      <button onClick={handleClick} id="random-planeteer">
        Click to Show a Random Planeteer
      </button>
    </div>
  );
}

export default RandomButton;
