import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header.js'
import Content from './components/content/Content.js'
import Divider from './components/divider/Divider.js'
import Home from './components/home/Home.js'
import Future from './components/future/Future.js'

const App = () => (
  <Router>
    <div>
      <Header />
      <Divider />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/future' component={Future} />
        <Route path='/:path' component={Content} />
      </Switch>
    </div>
  </Router>
)

export default App
