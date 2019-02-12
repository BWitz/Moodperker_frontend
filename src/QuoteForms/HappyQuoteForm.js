import React, { Component } from 'react'
import './App.css'

export default class HappyQuoteForm extends Component {

  state = {
    authorInput: "",
    quoteInput: ""
  }

  changeHandler = (event) => {
    this.setState({
      authorInput: event.target.value,
      quoteInput: event.target.value
    })
  }

  render() {
    return (
      <form>
      <input type="text" value={this.state.authorInput} onChange={(event) => this.changeHandler(event.target.value)}/>
      <input type="text" value={this.state.quoteInput} onChange={(event) => this.changeHandler(event.target.value)}/>
      </form>
    )
  }
}
