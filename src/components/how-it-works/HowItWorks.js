import React from 'react'
import SwatchBox from '../swatch-box/SwatchBox.js'
import Button from '../button/Button.js'
import './HowItWorks.css'

const text1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'

const text2 =
  'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'

const text3 =
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'

const texts = [text1, text2, text3]

const HowItWorks = () =>
  <div className="how-it-works">
    <h1 className="title">How Does It Work?</h1>
    <div className="how-it-works__box">
      {texts.map((text, i) =>
        <SwatchBox key={i}>
          {text}
        </SwatchBox>
      )}
    </div>
    <p className="how-it-works__p">Still have questions?</p>
    <Button className="button--yellow" to="/faq">
      Read the FAQ
    </Button>
  </div>

export default HowItWorks
