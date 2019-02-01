import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import MoodContainer from './Containers/MoodContainer'

class App extends Component {

  state = {
    currentWindow: "Homepage",
    currentMood: "Test",
    moodContent: []
  }

  getContent = () => {
    fetch(`https://www.reddit.com/r/wholesomegifs/.json`)
    .then(res => res.json())
    .then(data => {
      this.setState({moodContent: data})
    })
  }

  componentDidMount() {
    this.getContent();
  }

  getRandomArrayItem = (min, max) => {
    let randomNumber = Math.random() * (max - min) + min
    let randomNumberRounded =  Math.floor(randomNumber)
    console.log(randomNumberRounded)
    return randomNumberRounded;
  }

  changeHandler = event => {
    event.preventDefault();
    this.setState({
      currentMood: event.target.value
    })
  }

  getRandomImgUrl = () => {
    let children = this.state.moodContent.data && this.state.moodContent.data.children;
    if (children) {
      let randomNumber = this.getRandomArrayItem(1, 25);
      console.log(children[randomNumber].data.url)
      return children[randomNumber].data.url;
    }
  }


  render() {
    console.log(this.getRandomImgUrl());
    return (
      <div className="App">
      <Navbar
      randomNumber = {this.getRandomArrayItem}
      />
        <h1>MoodPerker</h1>
        <br />
        <h3>How are you?</h3>
        <select value={this.state.currentMood} onChange={event => this.changeHandler(event)}>
        <option value="Happy" name="Happy"> Happy </option>
        <option value="Sad" name="Sad"> Sad </option>
        <option value="Content" name="Content"> Content </option>
        </select>
        <MoodContainer
        moodContent = {this.getRandomImgUrl}
        />
        <MoodContainer
        moodContent = {this.getRandomImgUrl}
        />
      </div>
    );
  }
}

export default App;
