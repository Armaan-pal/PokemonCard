import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PokemonDetailContext from "../../context/pokemonDetailContext";
import "./styles.css";

const Card = ({ pokemon }) => {
  const [pokemonDetail, setPokemonDetail] = useContext(PokemonDetailContext);
  let navigate = useNavigate();

  console.log(pokemon);
  const handleDetailClick = () => {
    setPokemonDetail(pokemon);
    navigate("/details");
  };
  return (
    <div class="card">
      <img src={pokemon.images.small} alt="" />
      <h3 onClick={handleDetailClick}>{pokemon.name}
      </h3>
    </div>
  );
};

export default Card;
