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
    this.getContentNews();
    this.getBoredQuotes();
    this.colorHandler();
  }


  getBoredImages = () => {
    fetch(`http://localhost:3000/api/v1/boredimgs`)
    .then(res => res.json())
    .then(boredImages => {
      this.setState({
        moodImages: boredImages
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

  getBoredQuotes = () => {
    fetch(`http://localhost:3000/api/v1/boredquotes`)
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
