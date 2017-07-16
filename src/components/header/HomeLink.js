import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './HomeLink.css'

const title = 'Exceptional Persons\nSupper Club'

const HomeLink = ({ to }) =>
  <Link className="header__home-link" to={to}>
    <img className="header__home-logo" src={logo} alt="logo" />
    <pre className="header__home-title">
      {title}
    </pre>
  </Link>

export default HomeLink
