import React, { Component } from 'react';
import './App.css';
import MoodImageContainer from './Containers/MoodImageContainer'
import MoodNewsContainer from './Containers/MoodNewsContainer'

class App extends Component {

  state = {
    currentMood: "",
    moodImages : [],
    moodNews: []
  }

  happyBackground = {
    display: "background-color: #FFD850"
  }

  sadBackground = {
    display: "background-color: #90BAFF"
  }

  contentBackground = {
    display: "background-color: #6EFF97"
  }

  defaultBackground = {
    display: "background-color: white"
  }

  componentDidMount() {
    this.getMoodBasedImages();
    this.getMoodBasedNews();
  }

  componentDidUpdate() {
    console.log('update!')
  }

  getMoodBasedImages = () => {
    switch(this.state.currentMood) {

      case 'Happy' :
        this.getHappyImages();
        break
      case 'Sad' :
        this.getSadImages();
        break
      case 'Content':
        this.getContentImages();
        break
      default:
        console.log('Please select a mood for related images!')
    }
  }

  getMoodBasedNews = () => {
    switch(this.state.currentMood) {

      case 'Happy' :
        this.getHappyNews();
        break
      case 'Sad' :
        this.getSadNews();
        break
      case 'Content':
        this.getContentNews();
        break
      default:
        console.log('Please select a mood for related news!')
        this.setState({
          moodImages: [],
          moodNews: []
        })
    }
  }

  getHappyImages = () => {
    fetch('http://localhost:3000/api/v1/happyimgs')
    .then(res => res.json())
    .then(happyImages => {
      this.setState({
        moodImages: happyImages
      })
    })
  }

  getSadImages = () => {
    fetch('http://localhost:3000/api/v1/sadimgs')
    .then(res => res.json())
    .then(sadImages => {
      this.setState({
        moodImages: sadImages
      })
    })
  }

  getContentImages = () => {
    fetch(`http://localhost:3000/api/v1/contentimgs`)
    .then(res => res.json())
    .then(contentImages => {
      this.setState({
        moodImages: contentImages
      })
    })

  }

  getHappyNews = () => {
    fetch(`http://localhost:3000/api/v1/happynews`)
    .then(res => res.json())
    .then(happyNews =>
      this.setState({
        moodNews: happyNews
      })
    )
  }

  getSadNews = () => {
    fetch(`http://localhost:3000/api/v1/sadnews`)
    .then(res => res.json())
    .then(sadNews => {
      this.setState({
        moodNews: sadNews
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

  getRandomArrayItem = (min, max) => {
    let randomNumber = Math.random() * (max - min) + min
    let randomNumberRounded =  Math.floor(randomNumber)
    return randomNumberRounded;
  }

  changeHandler = event => {
    event.preventDefault();
    this.setState({
      currentMood: event.target.value
    }, ()=>{
      this.getMoodBasedImages();
      this.getMoodBasedNews();
    });
  }

  getRandomImage = () => {
    let images = this.state.moodImages;
    if (images.length > 0) {
      let randomNumber = this.getRandomArrayItem(1, 10);
      console.log(images[randomNumber])
    } else {
      return null;
    }
  }


  render() {
    return (
      <div className="App">
      <div className="MoodSelect">
        <h1 className="title"><u>MoodPerker</u></h1>
        <br />
        <h3 className="secondaryTitle">How are you?</h3>
        <select value={this.state.currentMood} onChange={event => this.changeHandler(event)}>
        <option value="">I feel..</option>
        <option value="Happy" name="Happy"> Happy </option>
        <option value="Sad" name="Sad"> Sad </option>
        <option value="Content" name="Content"> Content </option>
        </select>
        </div>
        <br />
        <br />
        <MoodImageContainer
        images = {this.state.moodImages}
        mood = {this.state.currentMood}/>
        <MoodNewsContainer
        news = {this.state.moodNews}
        mood = {this.state.currentMood}/>
      </div>
    );
  }
}

export default App;
