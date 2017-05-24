import React from 'react'

const Content = ({ match }) => (
  <div>
    <h1>
      {match.params.path ? match.params.path : 'Home'}
    </h1>
  </div>
)

export default Content
