import React from 'react'
import divider from './divider.svg'
import './Divider.css'

const Divider = () => (
  <div className='divider'>
    <img className='divider__image' src={divider} alt='divider' />
  </div>
)

export default Divider
