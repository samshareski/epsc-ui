import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const Button = ({ to, children, className }) =>
  <Link className={'button ' + className} to={to}>
    {children}
  </Link>

export default Button
