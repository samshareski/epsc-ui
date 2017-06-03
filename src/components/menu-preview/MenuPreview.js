import React from 'react'
import './MenuPreview.css'

const frameLeft = '/assets/frame-left.svg'
const frameRight = '/assets/frame-right.svg'
const borderBottom = '/assets/border-bottom.svg'
const title = "Here's a taste of\nwhat's to come"
const menuItems = [
  'Red and White Sangria',
  'BBQ Pork Back Ribs',
  'Lemon-Hibiscus Ice Cream'
]

const MenuPreview = () => (
  <div className='menu-preview'>
    <h1 className='title'>{title}</h1>
    <div className='menu'>
      <img className='menu__frame' src={frameLeft} alt='Left Frame' />
      <div className='menu__card'>
        {menuItems.map((item, i) => (
          <div className='menu__item' key={i}>{item}</div>
        ))}
      </div>
      <img className='menu__frame' src={frameRight} alt='Right frame' />
    </div>
    <img className='menu__bottom' src={borderBottom} alt='Border bottom' />
  </div>
)

export default MenuPreview
