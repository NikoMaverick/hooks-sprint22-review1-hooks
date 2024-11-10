import React from 'react'
import Rick from './components/Rick';
import Pokemon from './components/Pokemon';
import './App.css';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';
  
  return (
    <div className='container'>
      <Rick url={ urlRick } />
      <Pokemon url={ urlPokemon } />
    
    </div>
  );
}

export default App;
