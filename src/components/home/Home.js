import React from 'react'
import CallToAction from '../call-to-action/CallToAction.js'
import Blurbs from '../blurbs/Blurbs.js'
import Divider from '../divider/Divider.js'

const table = '/assets/dinner-table.svg'
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
  </div>
)

export default Home
