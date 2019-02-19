import React, { Component } from 'react'
import { Route, Switch, Link, withRouter } from 'react-router-dom'
import HappyQuoteForm from '../QuoteForms/HappyQuoteForm'
import SadQuoteForm from '../QuoteForms/SadQuoteForm'
import BoredQuoteForm from '../QuoteForms/BoredQuoteForm'

class Navbar extends Component {

quoteRedirectHandler = () => {
  switch(this.props.mood) {
    case 'Happy' :
      return <Link to={"/HappyQuoteForm"}>
      <button className = 'nav-button create-quote-button'>Add a quote</button>
      </Link>
    case 'Sad' :
      return <Link to={"/SadQuoteForm"}>
      <button className = 'nav-button create-quote-button'>Add a quote</button>
      </Link>
    case 'Bored':
      return <Link to={"/BoredQuoteForm"}>
      <button className = 'nav-button create-quote-button'>Add a quote</button>
      </Link>
    default:
      console.log('quoteRedirectHandler not functioning properly!')
  }
}

newsRedirectHandler = () => {
  switch(this.props.mood) {
    case 'Happy' :
      return <Link to={"/HappyNewsForm"}>
      <button className = 'nav-button create-news-button'>Add News</button>
      </Link>
    case 'Sad' :
      return <Link to={"/SadNewsForm"}>
      <button className = 'nav-button create-news-button'>Add News</button>
      </Link>
    case 'Bored':
      return <Link to={"/BoredNewsForm"}>
      <button className = 'nav-button create-news-button'>Add News</button>
      </Link>
    default:
      console.log('newsRedirectHandler not functioning properly!')
  }
}



  render() {
    return (
      <div>
      <Switch>
      <Route path="/HappyQuoteForm" component={HappyQuoteForm}/>
      <Route path="/SadQuoteForm" component={SadQuoteForm} />
      <Route path="/BoredQuoteForm" component={BoredQuoteForm}/>
      </Switch>
      <nav className="Navbar">
      <br />
      <Link to={"/"}> <button className = 'nav-button home'>Home</button> </Link>
      {this.newsRedirectHandler()}
      {this.quoteRedirectHandler()}
      </nav>
      </div>
    )
  }
}

export default withRouter(Navbar);
