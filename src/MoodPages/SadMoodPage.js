import React, { Component } from 'react';
import '../App.css';
import MoodImageContainer from '../Containers/MoodImageContainer'
import MoodNewsContainer from '../Containers/MoodNewsContainer'
import MoodQuoteContainer from '../Containers/MoodQuoteContainer'
import Navbar from '../Components/Navbar'

export default class SadMoodPage extends Component {

  state = {
    currentMood : "Sad",
    moodImages : [],
    moodNews: [],
    moodQuotes: []
  }

  componentDidMount() {
    this.getSadImages();
    this.getSadNews();
    this.getSadQuotes();
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

  getSadQuotes = () => {
    fetch(`http://localhost:3000/api/v1/sadquotes`)
    .then(res => res.json())
    .then(sadQuotes => {
      this.setState({
        moodQuotes: sadQuotes
      })
    })
  }

  colorHandler = () => {
    switch(this.state.currentMood) {
      case 'Sad':
        document.querySelector('body').style.backgroundColor = "#90BAFF"
        break;
        default:
        console.log('no color!')
    }
  }

  render() {
    return (
      <div>
        <Navbar
        mood = {this.state.currentMood}
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
