import React, { useState, useEffect } from "react";
import getPokemonData from "../api";
import "../index.css";

function Hobbies(props) {
  const [pokemon, setPokemon] = useState({});
  const [type, setType] = useState("pikachu");
  //const [image, setImage] = useState([]);

  const getPokemonAsync = () => {
    try {
       getPokemonData(type)
       .then((response) => setPokemon(response.data));
      // console.log(pokemon.name);
      // console.log(pokemon.sprites.front_default);

     } catch (e) {
      console.log("Error: Something went wrong");
    }
  };

  useEffect(() => {
    getPokemonAsync();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1>This is hobby</h1>
        <div className="inputs">
          <input
            onChange={(e) => setType(e.target.value)}
            value={type}
            type="text"
            placeholder="Enter the pokemon type"
          />
          <button onClick={getPokemonAsync}> Click to Check</button>
          <br />
        </div>
        <img src={pokemon.sprites.front_default} alt=""></img>

        <h3>Pokemon Name: {pokemon.name}</h3>
       </div>
    </div>
  );
}

export default Hobbies;
