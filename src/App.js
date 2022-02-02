import React, { Component } from 'react'
import FullNews from './components/FullNews'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export class App extends Component {


  render() {
    return (
      <>
      <Router>
        <Navbar name="Shashank" />
        <div className='container mx-auto px-4'>
        <Switch>
          <Route exact path='/'>
            <News />
          </Route>
        </Switch>
        </div>
      </Router>
      </>
    )
  }
}

export default App
