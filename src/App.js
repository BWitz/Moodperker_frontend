import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import MoodContainer from './Containers/MoodContainer'

class App extends Component {

  state = {
    currentWindow: "Homepage",
    currentMood: "No Current Mood",
    moodContent: [],
    moodImages : [],
    moodNews: []
  }

  getContent = () => {
    fetch(`https://www.reddit.com/r/wholesomegifs/.json`)
    .then(res => res.json())
    .then(data => {
      this.setState({moodContent: data})
    })
  }

  getHappyImages = () => {
    fetch('http://localhost:3000/api/v1/happyimgs')
    .then(res => res.json())
    .then(happyImages => {
      this.setState({
        moodImages: happyImages
      })
    })
  }

  getSadImages = () => {
    fetch('http://localhost:3000/api/v1/sadimgs')
    .then(res => res.json())
    .then(sadImages => {
      this.setState({
        moodImages: sadImages
      })
    })
  }

  getContentImages = () => {
    fetch(`http://localhost:3000/api/v1/contentimgs`)
    .then(res => res.json())
    .then(contentImages => {
      this.setState({
        moodImages: contentImages
      })
    })
  }

  getHappyNews = () => {
    fetch(`http://localhost:3000/api/v1/happynews`)
    .then(res => res.json())
    .then(happyNews => {
      this.setState({
        moodNews: happyNews
      })
    })
  }

  getSadNews = () => {
    fetch(`http://localhost:3000/api/v1/sadnews`)
    .then(res => res.json())
    .then(sadNews => {
      this.setState({
        moodNews: sadNews
      })
    })
  }

  getContentNews = () => {
    fetch(`http://localhost:3000/api/v1/contentnews`)
    .then(res => res.json())
    .then(contentNews => {
      this.setState({
        moodNews: contentNews
      })
    })
  }


  componentDidMount() {
    this.getContent();
  }

  getRandomArrayItem = (min, max) => {
    let randomNumber = Math.random() * (max - min) + min
    let randomNumberRounded =  Math.floor(randomNumber)
    return randomNumberRounded;
  }

  changeHandler = event => {
    event.preventDefault();
    this.setState({
      currentMood: event.target.value
    })
  }

  // f. getRandomImgUrl is designed to pull from Reddit api; Refactor to fit current fetch models or create different function to tie into prop within MoodContainer

  getRandomImgUrl = () => {
    let children = this.state.moodContent.data && this.state.moodContent.data.children;
    if (children) {
      let randomNumber = this.getRandomArrayItem(1, 25);
      console.log(children[randomNumber].data.url)
      return children[randomNumber].data.url;
    }
  }


  render() {
    console.log(this.state.currentMood)
    return (
      <div className="App">
      <Navbar
      randomNumber = {this.getRandomArrayItem}
      />
        <h1><u>MoodPerker</u></h1>
        <br />
        <select value={this.state.currentMood} onChange={event => this.changeHandler(event)}>
        <option value="Happy" name="Happy"> Happy </option>
        <option value="Sad" name="Sad"> Sad </option>
        <option value="Content" name="Content"> Content </option>
        </select>
        <br />
        <br />
        <h3>How are you?</h3>
        <MoodContainer
        moodContent = {this.getRandomImgUrl}
        />
      </div>
    );
  }
}

export default App;
