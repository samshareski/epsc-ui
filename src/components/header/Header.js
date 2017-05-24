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
    <HeaderLink href='about' src={about} alt='about' />
    <HeaderLink href='past' src={past} alt='past' />
    <HeaderLink href='/' src={logo} alt='logo' />
    <HeaderLink href='faq' src={faq} alt='faq' />
    <HeaderLink href='future' src={future} alt='future' />
  </div>
)

export default Header
