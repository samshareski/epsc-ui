import React from 'react'
import Button from '../button/Button.js'
import './CallToAction.css'

const CallToAction = ({ title, body, table, linkText, linkTo }) => (
  <div className='cta'>
    <h1 className='title'>{title}</h1>
    <h2 className='cta-body'>{body}</h2>
    <img className='cta-table' src={table} alt='Dinner Table' />
    <Button to={linkTo}>{linkText}</Button>
  </div>
)

export default CallToAction
