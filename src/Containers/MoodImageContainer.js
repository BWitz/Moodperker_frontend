import React, { Component } from 'react'
import MoodImageCard from '../Components/MoodImageCard'
import '../App.css'

class MoodImageContainer extends Component {

  getRandomNumber = (min, max) => {
    let randomNumber = Math.random() * (max - min) + min;
    let randomNumberRounded =  Math.floor(randomNumber);
    return randomNumberRounded
  }

  getRandomImage = () => {
    let randomImageIndex = this.getRandomNumber(0, 9);
    return this.props.images[randomImageIndex];
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
        <MoodImageCard image = {this.getRandomImage()} />
        </div>
      )
    }
  }

render() {
  return (
    <div>
    {this.moodCardManager()}
    </div>
    )
  }
}

export default MoodImageContainer;
