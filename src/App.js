import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/header/Header.js'
import Content from './components/content/Content.js'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <hr />
          <Route path='/' component={Content} />
        </div>
      </Router>
    )
  }
}

export default App
