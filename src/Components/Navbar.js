import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {







  render() {
    return (
      <nav className="Navbar">
      <br />
      <Link to={"/"}> <button className = 'nav-button home'>Home</button> </Link>
      <button className = 'nav-button create-quote-button'>Add a quote</button>
      <button className = 'nav-button login'>Login</button>
      </nav>
    )
  }
}

export default Navbar;
