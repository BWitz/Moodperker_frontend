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
    console.log(this.props.images[randomImageIndex])
    return this.props.images[randomImageIndex];
  }

  moodCardManager = () => {
    if (this.props.images.length === 0) {
      return null
    } else {
      return (
        <MoodImageCard image = {this.getRandomImage()}/>
      )
    }
  }

render() {
  console.log(this.props.images.length)
  return (
    <div>
    <p>I am the moodImageContainer!</p>
    {this.moodCardManager()}
    </div>
    )
  }
}

export default MoodImageContainer;
