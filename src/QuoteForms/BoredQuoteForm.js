import React, { Component } from 'react'
import '../App.css'

export default class BoredQuoteForm extends Component {

  state = {
    authorInput: "",
    quoteInput: ""
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = event => {
    event.preventDefault();
    if (this.state.authorInput.length < 3 || this.state.quoteInput.length < 5) {
      alert('Author name must be longer than 3 characters, Quote must be longer than 4 characters!')
    }
    else if (this.state.authorInput.length > 20 || this.state.quoteInput.length > 160){
      alert('Authors name caps out at 20 characters, Quotes cap out at 160 characters!')
    }
    else {
      fetch(`https://moodperker-rails-api.herokuapp.com/api/v1/boredquotes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          author: this.state.authorInput,
          quote: this.state.quoteInput
        })
        }
      )
      .then(res => res.json())
      .then(alert(`Your quote has been added to the bored mood page!`))
    }
  }

  render() {
    return (
      <div>
      <form className="quoteForm">
      <input className="inputField" type="text" value={this.state.authorInput} name="authorInput" placeholder="Enter Author Here" onChange={this.changeHandler}/>
      <br />
      <input className="inputField" type="text" value={this.state.quoteInput} name="quoteInput" placeholder="Enter Quote Here" onChange={this.changeHandler}/>
      <br />
      <button className="submitButton" type="submit" onClick={this.submitHandler}>Submit</button>
      <br />
      </form>
      </div>
    )
  }
}
