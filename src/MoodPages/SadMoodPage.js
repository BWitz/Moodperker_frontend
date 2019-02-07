import React, { Component } from 'react';
import '../App.css';
import MoodImageContainer from '../Containers/MoodImageContainer'
import MoodNewsContainer from '../Containers/MoodNewsContainer'

export default class SadMoodPage extends Component {

  state = {
    currentMood : "Sad",
    moodImages : [],
    moodNews: []
  }

  componentDidMount() {
    this.getSadImages();
    this.getSadNews();
    this.colorHandler();
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

  getSadNews = () => {
    fetch(`http://localhost:3000/api/v1/sadnews`)
    .then(res => res.json())
    .then(sadNews => {
      this.setState({
        moodNews: sadNews
      })
    })
  }

  colorHandler = () => {
    switch(this.state.currentMood) {
      case 'Sad':
        document.querySelector('body').style.backgroundColor = "#90BAFF"
        default:
        console.log('no color!')
    }
  }

  render() {
    return (
      <div>
        <h1 className="App">I'm the sad mood page!</h1>
        <MoodImageContainer
        images = {this.state.moodImages}
        />
        <MoodNewsContainer
        news = {this.state.moodNews}
        />
      </div>
    )
  }
}
