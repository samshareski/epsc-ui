import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/header/Header.js'
import Content from './components/content/Content.js'
import Divider from './components/divider/Divider.js'
import CallToAction from './components/call-to-action/CallToAction.js'

const App = () => (
  <Router>
    <div>
      <Header />
      <Divider />
      <Route exact path='/' component={CallToAction} />
      <Route path='/:path' component={Content} />
    </div>
  </Router>
)

export default App
