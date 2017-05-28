import React from 'react'
import { Link } from 'react-router-dom'
import HeaderLink from './HeaderLink.js'
import logo from './assets/logo.svg'
import './Header.css'

const style = {
  width: 6.25 + 'rem'
}

const Header = () => (
  <div className='container'>
    <HeaderLink href='about'>About</HeaderLink>
    <HeaderLink href='past'>Past</HeaderLink>
    <Link style={style} to='/'>
      <img src={logo} alt='logo' />
    </Link>
    <HeaderLink href='faq'>F.A.Q.</HeaderLink>
    <HeaderLink href='future'>Future</HeaderLink>
  </div>
)

export default Header
