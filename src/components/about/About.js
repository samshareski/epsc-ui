import React from 'react'
import logo from '../../assets/logo.svg'
import './About.css'

const paragraph1 =
  "Bringing people together. It's as simple as that. Wonderful people. Fabulous people. Kind people. And most importantly exceptional people. Like you. Once a month. To sit around our big table, eat and unwind"
const paragraph2 =
  "Life gets busy. We understand. That's why the EPSC lets you RSVP for whichever date works best for you. Dinners are announced at least a month in advance and generally take place on Saturday nights. So take a break from Netflix, and come join us for dinner."

const About = () =>
  <div className="about">
    <h1 className="title">What's this all about?</h1>
    <div className="about-body">
      <div className="about-logo">
        <div className="about-logo__background">
          <img className="about-logo__logo" src={logo} alt="Logo" />
        </div>
      </div>
      <div className="about-blurb">
        <p>
          {paragraph1}
        </p>
        <p>
          {paragraph2}
        </p>
      </div>
    </div>
  </div>

export default About
