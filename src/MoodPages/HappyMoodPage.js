import React, { Component } from 'react';
import '../App.css';
import Navbar from '../Components/Navbar'
import MoodImageContainer from '../Containers/MoodImageContainer'
import MoodNewsContainer from '../Containers/MoodNewsContainer'
import MoodQuoteContainer from '../Containers/MoodQuoteContainer'

export default class HappyMoodPage extends Component {

  state = {
    currentMood : 'Happy',
    moodImages : [],
    moodNews: [],
    moodQuotes: [],
  }

  componentDidMount() {
    this.getHappyImages();
    this.getHappyNews();
    this.getHappyQuotes();
    this.colorHandler();
  }

  getHappyImages = () => {
    fetch('https://moodperker-rails-api.herokuapp.com/api/v1/happyimgs')
    .then(res => res.json())
    .then(happyImages => {
      this.setState({
        moodImages: happyImages
      })
    })
  }

  getHappyNews = () => {
    fetch(`https://moodperker-rails-api.herokuapp.com/api/v1/happynews`)
    .then(res => res.json())
    .then(happyNews =>
      this.setState({
        moodNews: happyNews
      })
    )
  }

  getHappyQuotes = () => {
    fetch(`https://moodperker-rails-api.herokuapp.com/api/v1/happyquotes`)
    .then(res => res.json())
    .then(happyQuotes => {
      this.setState({
        moodQuotes: happyQuotes
      })
    })
  }

  colorHandler = () => {
    switch(this.state.currentMood) {
      case 'Happy':
        document.querySelector('body').style.backgroundColor = "#FFD850";
        break;
        default:
        console.log('no color!')
    }
  }

  render() {
    return (
      <div className="happyMood">
        <Navbar
         mood={this.state.currentMood}
        />
        <MoodQuoteContainer
        quotes = {this.state.moodQuotes}
        />
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
