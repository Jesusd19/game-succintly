import React, { Component } from 'react';
import Game from './componet/Game';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game rows={5} columns={6} activeCellsCount={6} />       
      </div>
    );
  }
}

export default App;
