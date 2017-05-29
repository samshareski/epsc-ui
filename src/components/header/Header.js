import React from 'react'
import { Link } from 'react-router-dom'
import HomeLink from './HomeLink.js'
import './Header.css'

const Header = () => (
  <div className='header'>
    <HomeLink to='/' />
    <div className='header__links'>
      <Link className='header__link' to='about'>About</Link>
      <Link className='header__link' to='past'>Past</Link>
      <Link className='header__link' to='faq'>F.A.Q.</Link>
      <Link className='header__link' to='future'>Future</Link>
    </div>
  </div>
)

export default Header
