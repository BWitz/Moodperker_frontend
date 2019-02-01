import React, { Component } from 'react'
import '../App.css'

class MoodContainer extends Component {

  state = {
    mood: "Happy",
    image_id: []
  }

  getRandomArrayItem = (min, max) => {
    let randomNumber = Math.random() * (max - min) + min;
    let randomNumberRounded =  Math.floor(randomNumber);
    console.log(randomNumberRounded);
  }

  render() {
    let index = () => {this.getRandomArrayItem(1, 25)};
    console.log(index)
    return (
      <div>
        <img src={this.props.moodContent()} alt="" />
        <p>Test</p>
      </div>
    )
  }
}

export default MoodContainer;
