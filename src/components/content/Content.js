import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../header/Header.js'
import Divider from '../divider/Divider.js'
import Home from '../home/Home.js'
import Future from '../future/Future.js'
import Placeholder from '../placeholder/Placeholder.js'

const Content = () => (
  <div>
    <Header />
    <Divider />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/future' component={Future} />
      <Route path='/:path' component={Placeholder} />
    </Switch>
  </div>
)

export default Content
