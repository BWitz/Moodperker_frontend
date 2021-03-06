import React, { Component } from 'react';
import '../App.css';
import MoodImageContainer from '../Containers/MoodImageContainer'
import MoodNewsContainer from '../Containers/MoodNewsContainer'
import MoodQuoteContainer from '../Containers/MoodQuoteContainer'
import Navbar from '../Components/Navbar'

export default class BoredMoodPage extends Component {

  state = {
    currentMood: "Bored",
    moodImages : [],
    moodNews: [],
    moodQuotes: []
  }

  componentDidMount() {
    this.getBoredImages();
    this.getBoredNews();
    this.getBoredQuotes();
    this.colorHandler();
  }


  getBoredImages = () => {
    fetch(`https://moodperker-rails-api.herokuapp.com/api/v1/boredimgs`)
    .then(res => res.json())
    .then(boredImages => {
      this.setState({
        moodImages: boredImages
      })
    })
  }

  getBoredNews = () => {
    fetch(`https://moodperker-rails-api.herokuapp.com/api/v1/borednews`)
    .then(res => res.json())
    .then(boredNews => {
      this.setState({
        moodNews: boredNews
      })
    })
  }

  getBoredQuotes = () => {
    fetch(`https://moodperker-rails-api.herokuapp.com/api/v1/boredquotes`)
    .then(res => res.json())
    .then(boredQuotes => {
      this.setState({
        moodQuotes: boredQuotes
      })
    })
  }

  colorHandler = () => {
    switch(this.state.currentMood) {
      case 'Bored':
        document.querySelector('body').style.backgroundColor = "#6EFF97"
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
