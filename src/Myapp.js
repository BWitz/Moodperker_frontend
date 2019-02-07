import React, {Component} from 'react'
import App from './App'
import { Route, Switch } from 'react-router-dom'

class MyApp extends Component {
  render() {
    return (
      <div>
      <Switch>
      <Route path="/" component={App}/>
      </Switch>
      </div>
    );
  }
}

export default MyApp
