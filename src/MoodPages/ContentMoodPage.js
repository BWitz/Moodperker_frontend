import React, { Component } from 'react';
import '../App.css';
import MoodImageContainer from '../Containers/MoodImageContainer'
import MoodNewsContainer from '../Containers/MoodNewsContainer'

export default class ContentMoodPage extends Component {

  state = {
    currentMood: "Content",
    moodImages : [],
    moodNews: []
  }

  componentDidMount() {
    this.getContentImages();
    this.getContentNews();
    this.colorHandler();
  }


  getContentImages = () => {
    fetch(`https://moodperker-rails-api.herokuapp.com/api/v1/contentimgs`)
    .then(res => res.json())
    .then(contentImages => {
      this.setState({
        moodImages: contentImages
      })
    })
  }

  getContentNews = () => {
    fetch(`https://moodperker-rails-api.herokuapp.com/api/v1/contentnews`)
    .then(res => res.json())
    .then(contentNews => {
      this.setState({
        moodNews: contentNews
      })
    })
  }

  colorHandler = () => {
    switch(this.state.currentMood) {
      case 'Content':
        document.querySelector('body').style.backgroundColor = "#6EFF97"
        break;
        default:
        console.log('no color!')
    }
  }

  render() {
    return (
      <div>
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
