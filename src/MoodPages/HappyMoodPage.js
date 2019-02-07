import React, { Component } from 'react';
import '../App.css';
import MoodImageContainer from '../Containers/MoodImageContainer'
import MoodNewsContainer from '../Containers/MoodNewsContainer'

export default class HappyMoodPage extends Component {

  state = {
    currentMood : 'Happy',
    moodImages : [],
    moodNews: []
  }

  componentDidMount() {
    this.getHappyImages();
    this.getHappyNews();
    this.colorHandler();
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

  getHappyNews = () => {
    fetch(`http://localhost:3000/api/v1/happynews`)
    .then(res => res.json())
    .then(happyNews =>
      this.setState({
        moodNews: happyNews
      })
    )
  }

  colorHandler = () => {
    switch(this.state.currentMood) {
      case 'Happy':
        document.querySelector('body').style.backgroundColor = "#FFD850"
        default:
        console.log('no color!')
    }
  }

  render() {
    return (
      <div className="happyMood">
        <h1 className="App">I'm the happy mood page!</h1>
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
