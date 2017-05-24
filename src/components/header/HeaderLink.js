import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderLink.css'

const HeaderLink = ({ href, src, alt }) => (
  <Link className='HeaderLink' to={href}>
    <img src={src} alt={alt} />
  </Link>
)

export default HeaderLink
