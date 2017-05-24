import React from 'react'
import logo from './assets/logo.svg'
import about from './assets/about.svg'
import past from './assets/past.svg'
import faq from './assets/faq.svg'
import future from './assets/future.svg'
import './Header.css'

const Header = () => (
  <div className='container'>
    <img src={about} alt='about' />
    <img src={past} alt='past' />
    <img src={logo} alt='logo' />
    <img src={faq} alt='faq' />
    <img src={future} alt='future' />
  </div>
)

export default Header
