import React from 'react'
import { Link } from 'react-router-dom'
import './CallToAction.css'

const CallToAction = ({ title, body, table, linkText, linkTo }) => (
  <div className='cta'>
    <h1 className='title'>{title}</h1>
    <h2 className='cta-body'>{body}</h2>
    <img className='cta-table' src={table} alt='Dinner Table' />
    <Link className='cta-button' to={linkTo}>{linkText}</Link>
  </div>
)

export default CallToAction
