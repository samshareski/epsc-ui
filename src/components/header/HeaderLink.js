import React from 'react'
import './HeaderLink.css'

const HeaderLink = ({ src, alt }) => (
  <a className='HeaderLink' href='/'>
    <img src={src} alt={alt} />
  </a>
)

export default HeaderLink
