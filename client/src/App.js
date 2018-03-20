import React, { Component } from 'react';
import './App.css';
import Game from './components/game/game.component';

export default class App extends Component {
  render () {
    return (
      <div>
        <Game/>
      </div>
    )
  }
}
