const express = require('express')
const app = express()
const compression = require('compression')
const path = require('path')

require('ignore-styles')
require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['env', 'react-app']
})

const universalLoader = require('./universal')

app.use(compression())

app.use(
  '/static',
  express.static(path.join(__dirname, '..', 'build', 'static'))
)
app.use(
  '/assets',
  express.static(path.join(__dirname, '..', 'build', 'assets'))
)

app.use('*', universalLoader)

app.listen(3000, () => {
  console.log('App listening on port 3000')
})
