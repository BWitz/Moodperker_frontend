import React, { Component } from 'react'
import MoodQuoteCard from '../Components/MoodQuoteCard'
import '../App.css'

class MoodQuoteContainer extends Component {

  getRandomNumber = (min, max) => {
    let randomNumber = Math.random() * (max - min) + min;
    let randomNumberRounded =  Math.floor(randomNumber);
    return randomNumberRounded;
  }

  getRandomQuote = () => {
    if (this.props.quotes.length === 0) {
      return null
    } else {
      let randomQuoteIndex = this.getRandomNumber(1, this.props.quotes.length);
      return this.props.quotes[randomQuoteIndex];
    }
  }

  quoteCardManager = () => {
    if (this.props.quotes.length === 0) {
      return null
    } else {
      return (
        <div className="MoodQuoteContainer">
        <MoodQuoteCard quote = {this.getRandomQuote()}/>
        </div>
      )
    }
  }

render() {
  return (
    <div>
    {this.quoteCardManager()}
    </div>
    )
  }
}

export default MoodQuoteContainer;
