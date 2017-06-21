import React from 'react'
import CallToAction from '../call-to-action/CallToAction.js'
import Blurbs from '../blurbs/Blurbs.js'
import About from '../about/About.js'
import Divider from '../divider/Divider.js'
import table from './assets/dinner-table.svg'

const cta = {
  title: 'Join Us for Dinner',
  body: 'Good food and even better company.',
  table: table,
  linkText: 'Come To Dinner',
  linkTo: 'future'
}

const Home = () => (
  <div>
    <CallToAction {...cta} />
    <Divider />
    <Blurbs />
    <Divider />
    <About />
    <Divider />
  </div>
)

export default Home
