import React from 'react'
import './SwatchBox.css'

const SwatchBox = ({ children }) => (
  <div>
    <div className='swatch__background' />
    <div className='swatch__box'>
      <p className='swatch__text'>{children}</p>
    </div>
  </div>
)

export default SwatchBox
