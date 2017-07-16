import React from 'react'
import SwatchBox from '../swatch-box/SwatchBox'
import './Blurb.css'

const Blurb = ({ face, name, blurb }) => (
  <div className='blurb'>
    <img className='blurb__image' src={face} alt={name} />
    <h2 className='blurb__name'>{name}</h2>
    <SwatchBox>{blurb}</SwatchBox>
  </div>
)

export default Blurb
