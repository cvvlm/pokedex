import logo from './logo.svg';
import './App.css';
import Pokedex from './Pokedex';
import { render } from '@testing-library/react';
import { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Pokedex />
      </div>
    );
  }
}

export default App;
