import React, { Component } from 'react'
import '../App.css'

export default class BoredNewsForm extends Component {

  state = {
    newsUrlInput: "",
    newsHeadlineInput: "",
    newsDescriptionInput: ""
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = event => {
    event.preventDefault();

    if (this.state.newsUrlInput.length < 20 || this.state.newsHeadlineInput.length < 15 || this.state.newsDescriptionInput.length < 35) {
      alert('An ideal URL should have at least 20 characters, Headlines must be longer than 15 characters, and a minimal description contains at least 35 characters.')
    }

    else if (this.state.newsHeadlineInput.length > 120 || this.state.newsDescriptionInput.length > 280){
      alert('Headlines cap at 120 characters, and Descriptions cap at 280 characters.')
    }

    else {
      fetch(`https://moodperker-rails-api.herokuapp.com/api/v1/borednews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          news_src: this.state.newsUrlInput,
          title: this.state.newsHeadlineInput,
          description: this.state.newsDescriptionInput
        })
        }
      )
      .then(res => res.json())
      .then(alert(`Your news submission has been added to the bored mood page!`))
    }
  }

  render() {
    return (
      <div>
      <form className="newsForm">
      <input className="inputField" type="text" value={this.state.newsHeadlineInput} name="newsHeadlineInput" placeholder="Enter News Headline Here" onChange={this.changeHandler}/>
      <br />
      <input className="inputField" type="text" value={this.state.newsUrlInput} name="newsUrlInput" placeholder="Enter News URL Here" onChange={this.changeHandler}/>
      <br />
      <input className="inputField" type="text" value={this.state.newsDescriptionInput} name="newsDescriptionInput" placeholder="Enter Article Description Here" onChange={this.changeHandler}/>
      <button className="submitButton" type="submit" onClick={this.submitHandler}>Submit</button>
      <br />
      </form>
      </div>
    )
  }
}
