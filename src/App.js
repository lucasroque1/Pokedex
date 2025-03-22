import React, { useEffect, useState } from 'react';
import './style.css'

function App() {
  const [pokemon, setPokemon] = useState({});
  const [nomePokemon, setNomePokemon] = useState('');


  function loadAPI(nome = 'charizard') {
    let url = `https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}`;

    fetch(url)
      .then(response => response.json())
      .then(res => {
        console.log(res)
        setPokemon(res)
      })
      .catch(err => console.log(err));
  }


  useEffect(() => {

    loadAPI();

  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (nomePokemon.trim() !== '') {
      loadAPI(nomePokemon);
    }
  }



  return (
    <div className='container'>
      <header>
        <strong> Pokedex </strong>
      </header>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o nome do Pokémon"
          value={nomePokemon}
          onChange={(e) => setNomePokemon(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>




      <div>
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
        <div>Name: {pokemon.name}</div>
        <div>N° {pokemon.id}</div>
        <div>Peso: {pokemon.weight / 10}kg</div>
        <div>Altura: {pokemon.height / 10}m</div>
      </div>
    </div>
  );
}

export default App;
