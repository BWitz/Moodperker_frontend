import React, {Component} from 'react'
import App from './App'
import HappyMoodPage from './MoodPages/HappyMoodPage'
import SadMoodPage from './MoodPages/SadMoodPage'
import ContentMoodPage from './MoodPages/ContentMoodPage'
import { Route, Switch } from 'react-router-dom'

class MyApp extends Component {
  render() {
    return (
      <div>
      <Switch>
      <Route path="/" component={App}/>
      <Route path="/Happy" component={HappyMoodPage}/>
      <Route path="/Sad" component={SadMoodPage}/>
      <Route path="/Content" component={ContentMoodPage}/>
      </Switch>
      </div>
    );
  }
}

export default MyApp
