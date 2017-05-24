import React from 'react'
import './Content.css'

const Content = ({ match }) => (
  <div className='Content'>
    <h1>
      {match.params.path
        ? match.params.path
        : 'Welcome to the Exceptional Persons Supper Club'}
    </h1>
  </div>
)

export default Content
