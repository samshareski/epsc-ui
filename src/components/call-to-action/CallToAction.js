import React from 'react'
import { Link } from 'react-router-dom'
import table from './assets/dinner-table.svg'
import './CallToAction.css'

const CallToAction = () => (
  <div className='cta'>
    <h1 className='cta-title'>Join Us for Dinner</h1>
    <h2 className='cta-body'>We promise good food and even better company.</h2>
    <img className='cta-table' src={table} alt='Dinner Table' />
    <Link className='cta-button' to='/'>Come To Dinner</Link>
  </div>
)

export default CallToAction
