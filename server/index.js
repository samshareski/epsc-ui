const express = require('express')
const app = express()
const path = require('path')

require('ignore-styles')
require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['env', 'react-app']
})

const universalLoader = require('./universal')

app.use(
  '/static',
  express.static(path.join(__dirname, '..', 'build', 'static'))
)
app.use(
  '/assets',
  express.static(path.join(__dirname, '..', 'build', 'assets'))
)

app.get('*', universalLoader)

app.listen(3000, () => {
  console.log('App listening on port 3000')
})
