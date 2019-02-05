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
    console.log(this.props.news[randomImageIndex])
    return this.props.news[randomImageIndex];
  }

  moodCardManager = () => {
    if (this.props.news.length === 0) {
      return null
    } else {
      return (
        <MoodNewsCard story = {this.getRandomArticle()}/>
      )
    }
  }

render() {
  return (
    <div>
    <p>I am the moodNewsContainer!</p>
    {this.moodCardManager()}
    </div>
  )
  }
}

export default MoodNewsContainer;
