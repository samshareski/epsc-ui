import React from 'react'
import Blurb from './Blurb.js'
import './Blurbs.css'

const megBlurb = {
  face: '/assets/meg.svg',
  name: 'Meg',
  blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}

const amyMitchBlurb = {
  face: '/assets/amymitch.svg',
  name: 'Amy & Mitch',
  blurb: 'Sed eu volutpat augue. Curabitur gravida ultricies turpis, vitae scelerisque tortor interdum nec.'
}

const gloriaBlurb = {
  face: '/assets/gloria.svg',
  name: 'Gloria',
  blurb: 'Aliquam lectus elit, porttitor nec quam nec, condimentum tincidunt ipsum.'
}

const blurbs = [megBlurb, amyMitchBlurb, gloriaBlurb]

const Blurbs = () => (
  <div className='blurbs'>
    <h1 className='title'>What are people saying?</h1>
    <div className='blurbs__box'>
      {blurbs.map((blurb, i) => <Blurb key={i} {...blurb} />)}
    </div>
    <div className='blurbs__background' />
  </div>
)

export default Blurbs
