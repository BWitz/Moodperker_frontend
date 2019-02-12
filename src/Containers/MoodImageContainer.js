import React, { Component } from 'react'
import MoodImageCard from '../Components/MoodImageCard'
import '../App.css'

class MoodImageContainer extends Component {

  getRandomNumber = (min, max) => {
    let randomNumber = Math.random() * (max - min) + min;
    let randomNumberRounded =  Math.floor(randomNumber);
    return randomNumberRounded;
  }

  getRandomImage = () => {
    let randomImageIndex = this.getRandomNumber(1, 5);
    return this.props.images[randomImageIndex];
  }

  getSecondRandomImage = () => {
    let randomImageIndex = this.getRandomNumber(6, 10);
    return this.props.images[randomImageIndex]
  }

  moodCardManager = () => {
    if (this.props.images.length === 0) {
      return null
    } else {
      return (
        <div className="MoodImageContainer">
        <MoodImageCard image = {this.getRandomImage()}/>
        <br />
        <br />
        <br />
        <MoodImageCard image = {this.getSecondRandomImage()} />
        </div>
      )
    }
  }

render() {
  return (
    <div className={this.props.currentMood === "Happy" ? "happyMood" : this.props.currentMood === "Sad" ? "sadMood" : this.props.currentMood === "Content" ? "contentMood" : "App"}>
    {this.moodCardManager()}
    </div>
    )
  }
}

export default MoodImageContainer;
