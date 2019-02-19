import React, { Component } from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';

import HappyMoodPage from './MoodPages/HappyMoodPage';
import SadMoodPage from './MoodPages/SadMoodPage';
import ContentMoodPage from './MoodPages/ContentMoodPage';
import BoredMoodPage from './MoodPages/BoredMoodPage';

import HappyQuoteForm from './QuoteForms/HappyQuoteForm';
import SadQuoteForm from './QuoteForms/SadQuoteForm';
import BoredQuoteForm from './QuoteForms/BoredQuoteForm';

import HappyNewsForm from './NewsForms/HappyNewsForm';
import SadNewsForm from './NewsForms/SadNewsForm';
import BoredNewsForm from './NewsForms/BoredNewsForm';

import './App.css';

class App extends Component {

  state = {
    currentMood: "",
    moodImages : [],
    moodNews: []
  }

  // Necessary
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

  // Necessary
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


  redirectHandler = () => {
    switch(this.state.currentMood) {
      case 'Happy':
        return <Link to={"/Happy"}> <button className='go-button'>Do the thing!</button> </Link>;

      case 'Sad':
        return <Link to={"/Sad"}> <button className='go-button'>Do the thing!</button> </Link>;

      case 'Bored':
        return <Link to={"/Bored"}> <button className = 'go-button'>Do the thing!</button> </Link>;

      default:
        alert("Redirect handler does not have this selected mood!");
    }
  }

  titleHandler = () => {
    switch(this.state.currentMood) {
      case 'Happy':
        return "title happyTitle"
      case 'Sad':
        return "title sadTitle"
      case 'Bored':
        return "title boredTitle"
      default:
        return "title"
    }
  }

  render() {
    return (

      <div>
      <Switch>
      <Route path="/HappyQuoteForm" component={HappyQuoteForm}/>
      <Route path="/SadQuoteForm" component={SadQuoteForm} />
      <Route path="/BoredQuoteForm" component={BoredQuoteForm}/>
      <Route path="/HappyNewsForm" component={HappyNewsForm}/>
      <Route path="/SadNewsForm" component={SadNewsForm} />
      <Route path="/BoredNewsForm" component={BoredNewsForm}/>
      <Route path="/Happy" component={HappyMoodPage}/>
      <Route path="/Sad" component={SadMoodPage}/>
      <Route path="/Content" component={ContentMoodPage} />
      <Route path="/Bored" component={BoredMoodPage}/>
      <Route path="/Home" component={App}/>
      </Switch>

        <div className="App">
          <div className="MoodSelect">
          <h1 className={this.titleHandler()}><u>MoodPerker</u></h1>
          <br />
          <h3 className="secondaryTitle">How are you?</h3>
          <select className = 'select-thingy' value={this.state.currentMood} onChange={event => this.changeHandler(event)}>
          <option value="">I feel..</option>
          <option value="Happy" name="Happy"> Happy </option>
          <option value="Sad" name="Sad"> Sad </option>
          <option value="Bored" name="Bored"> Bored </option>
          </select>
          <br />
          <br />
          {this.state.currentMood === "" ? null : this.redirectHandler()}
        </div>
      </div>
      </div>
    );
  }
}


export default withRouter(App);
