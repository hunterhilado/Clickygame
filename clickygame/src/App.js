import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import characters from "./characters.json";
import Scoreboard from "./components/Scoreboard";
//import characterCard from "./components/characterCard"

// shuffles each click
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {

  state = {
    characters,
    clickedcharacters: [],
    score: 0,
    topScore: 0,
    alertMessage: 0,
    alertWin: 0
  };

  clickedImages = id => {
    let clickedcharacters = this.state.clickedImages;
    let score = this.state.score;
    let topScore = this.state.topScore;
    this.setState({
      showAlert: 0
    });

    if (clickedcharacters.indexOf(id) === -1) {
      clickedcharacters.push(id);
      this.handleIncrement();
      this.makeShuffle();
    } else if (this.state.score === 12) {
      this.setState({
        showwin: 1,
        score: 0,
        clickedcharacters: []
      });
    } else {
      this.setState({
        score: 0,
        clickedcharacters: []
      });
      this.setState({
        showAlert: 1
      });
    }

    if (score > topScore) {
      this.setState({
        topScore: score
      });
    }
  };

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1});
  };

  makeShuffle = () => {
    this.setState({ characters: shuffle(characters)});
  };

 


}


export default App;
