import React from 'react';
import Pokedex from './Pokedex';
import './App.css';
import logo from './pokeball.png'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex <img src={logo} className="App-logo" alt="logo" /></h1>
        <Pokedex />
      </header>
    </div>
  );
}

export default App;
