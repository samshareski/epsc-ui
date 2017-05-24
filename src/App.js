import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/header/Header.js'
import Content from './components/content/Content.js'

const App = () => (
  <Router>
    <div>
      <Header />
      <hr />
      <Route path='/:path?' component={Content} />
    </div>
  </Router>
)

export default App
