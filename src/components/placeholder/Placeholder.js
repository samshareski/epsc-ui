import React from 'react'
import './Placeholder.css'

const Placeholder = ({ match }) =>
  <div className="placeholder">
    <h1 className="placeholder-title">
      {match.params.path
        ? match.params.path
        : 'Welcome to the Exceptional Persons Supper Club'}
    </h1>
  </div>

export default Placeholder
