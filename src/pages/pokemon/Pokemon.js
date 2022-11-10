import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import "./styles.css";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoadin] = useState(true);

  async function getPokemonDetails() {
    setIsLoadin(true);
    const res = await fetch(
      `https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=20`
    );
    setIsLoadin(false);
    const json = await res.json();
    setPokemons(json.data);
  }

  useEffect(() => {
    getPokemonDetails();
  }, [page]);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div className="pokemon">
        {pokemons.map((pokemon) => (
          <Card pokemon={pokemon} />
        ))}
      </div>
      <nav className="pagination-container">
        <button
          className="pagination-button"
          id="prev-button"
          title="Previous page"
          aria-label="Previous page"
          onClick={() => setPage(page > 1 ? page - 1 : 1)}
        >
          &lt;
        </button>

        <div id="pagination-numbers">{page}</div>

        <button
          className="pagination-button"
          id="next-button"
          title="Next page"
          aria-label="Next page"
          onClick={() => setPage(page < 4 ? page + 1 : 5)}
        >
          &gt;
        </button>
      </nav>
    </div>
  );
};

export default Pokemon;
