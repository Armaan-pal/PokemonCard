import React, { useContext } from "react";
import PokemonDetailContext from "../../context/pokemonDetailContext";
import "./styles.css";

const Details = () => {
  const [pokemonDetail] = useContext(PokemonDetailContext);

  console.log("pokemonDetail", pokemonDetail);
  return (
    <div className="detailscard">
      <div className="pocket">
        <div className="image-container">
          <img src={pokemonDetail.images.large} alt="" />
        </div>

        <div className="info">
          <h1> Name - {pokemonDetail.name}</h1>
          <h2>HP - {pokemonDetail.hp}</h2>
          <h2>
            Attacks: Name: {pokemonDetail.attacks[0].name}, Damage -{" "}
            {pokemonDetail.attacks[0].damage}
          </h2>
          <h2>Level: {pokemonDetail.nationalPokedexNumbers[0]}</h2>
          <h3>type:{pokemonDetail.types}</h3>
        </div>

      </div>
    </div>
  );
};

export default Details;
