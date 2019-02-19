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
    if (this.props.news.length === 0) {
      return null
    } else {
    let lowerArticleBracket = Math.floor(this.props.news.length / 2)
    let randomArticleIndex = this.getRandomNumber(0, lowerArticleBracket);
    return this.props.news[randomArticleIndex];
    }
  }

  getSecondRandomArticle = () => {
    if (this.props.news.length === 0) {
      return null
    } else {
    let higherArticleBracket = Math.ceil(this.props.news.length / 2)
    let randomArticleIndex = this.getRandomNumber(higherArticleBracket, this.props.news.length);
    return this.props.news[randomArticleIndex];
    }
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
        <MoodNewsCard story = {this.getSecondRandomArticle()}/>
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
