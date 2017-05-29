import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/logo.svg'
import './Header.css'

const style = {
  width: 6.25 + 'rem'
}

const Header = () => (
  <div className='header'>
    <Link className='header__link' to='about'>About</Link>
    <Link className='header__link' to='past'>Past</Link>
    <Link style={style} to='/'>
      <img src={logo} alt='logo' />
    </Link>
    <Link className='header__link' to='faq'>F.A.Q.</Link>
    <Link className='header__link' to='future'>Future</Link>
  </div>
)

export default Header
