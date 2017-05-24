import React from 'react'
import HeaderLink from './HeaderLink.js'
import logo from './assets/logo.svg'
import about from './assets/about.svg'
import past from './assets/past.svg'
import faq from './assets/faq.svg'
import future from './assets/future.svg'
import './Header.css'

const Header = () => (
  <div className='container'>
    <HeaderLink src={about} alt='about' />
    <HeaderLink src={past} alt='past' />
    <img className='logo' src={logo} alt='logo' />
    <HeaderLink src={faq} alt='faq' />
    <HeaderLink src={future} alt='future' />
  </div>
)

export default Header
