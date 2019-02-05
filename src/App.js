import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import MoodImageContainer from './Containers/MoodImageContainer'
import MoodNewsContainer from './Containers/MoodNewsContainer'

class App extends Component {

  state = {
    currentWindow: "Homepage",
    currentMood: "",
    moodContent: [],
    moodImages : [],
    moodNews: []
  }

  componentDidMount() {
    this.getMoodBasedImages();
    this.getMoodBasedNews();
  }

  componentDidUpdate() {
    console.log('update!')
    // console.log(this.state.moodImages)
    // console.log(this.state.moodNews)
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
    }
  }

  /* getContent = () => {
    fetch(`https://www.reddit.com/r/wholesomegifs/.json`)
    .then(res => res.json())
    .then(data => {
      this.setState({moodContent: data})
    })
  } */

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

  // f. getRandomImgUrl is designed to pull from Reddit api; Refactor to fit current fetch models or create different function to tie into prop within MoodContainer

  getRandomImgUrl = () => {
    let children = this.state.moodContent.data && this.state.moodContent.data.children;
    if (children) {
      let randomNumber = this.getRandomArrayItem(1, 25);
      console.log(children[randomNumber].data.url)
      return children[randomNumber].data.url;
    }
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
      <Navbar
      randomNumber = {this.getRandomArrayItem}
      />
        <h1><u>MoodPerker</u></h1>
        <br />
        <select value={this.state.currentMood} onChange={event => this.changeHandler(event)}>
        <option value=""></option>
        <option value="Happy" name="Happy"> Happy </option>
        <option value="Sad" name="Sad"> Sad </option>
        <option value="Content" name="Content"> Content </option>
        </select>
        <br />
        <br />
        <h3>How are you?</h3>
        <MoodImageContainer
        images = {this.state.moodImages}/>
        <MoodNewsContainer
        news = {this.state.moodNews}/>
      </div>
    );
  }
}

export default App;
