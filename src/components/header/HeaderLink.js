import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderLink.css'

const HeaderLink = ({ href, children }) => (
  <Link className='HeaderLink' to={href}>
    {children}
  </Link>
)

export default HeaderLink
