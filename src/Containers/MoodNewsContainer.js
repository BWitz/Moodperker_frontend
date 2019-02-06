import React, { Component } from 'react'
import MoodNewsCard from '../Components/MoodNewsCard'
import '../App.css'

class MoodNewsContainer extends Component {

  getRandomNumber = (min, max) => {
    let randomNumber = Math.random() * (max - min) + min;
    let randomNumberRounded =  Math.floor(randomNumber);
    return randomNumberRounded
  }

  getRandomArticle = () => {
    let randomImageIndex = this.getRandomNumber(0, 2);
    return this.props.news[randomImageIndex];
  }

  moodCardManager = () => {
    if (this.props.news.length === 0) {
      return null
    } else {
      return (
        <div>
        <MoodNewsCard story = {this.getRandomArticle()}/>
        <br />
        <br />
        <br />
        <MoodNewsCard story = {this.getRandomArticle()}/>
        </div>
      )
    }
  }

render() {
  return (
    <div className="MoodNewsContainer">
    {this.moodCardManager()}
    </div>
  )
  }
}

export default MoodNewsContainer;
