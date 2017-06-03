import React from 'react'
import './Divider.css'

const divider = '/assets/divider.svg'

const Divider = () => (
  <div className='divider'>
    <img className='divider__image' src={divider} alt='divider' />
  </div>
)

export default Divider
