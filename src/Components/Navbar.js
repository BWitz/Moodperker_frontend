import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <nav>
      <button onClick={() => this.props.randomNumber(1, 100)}>Home</button>
      <button>Signup</button>
      <button>Login</button>
      </nav>
    )
  }
}

export default Navbar;
