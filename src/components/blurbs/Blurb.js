import React from 'react'
import './Blurb.css'

const Blurb = ({ face, name, blurb }) => (
  <div className='blurb'>
    <img className='blurb__image' src={face} alt={name} />
    <h2 className='blurb__name'>{name}</h2>
    <div className='blurb__background' />
    <div className='blurb__box'>
      <p className='blurb__blurb'>{blurb}</p>
    </div>
  </div>
)

export default Blurb
