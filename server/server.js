const express = require('express')
const app = express()
const compression = require('compression')
const morgan = require('morgan')
const path = require('path')

require('ignore-styles')
require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['env', 'react-app']
})

const universalLoader = require('./universal')

app.use(compression())

app.use(morgan('combined'))

app.use(
  '/static',
  express.static(path.join(__dirname, '..', 'build', 'static'))
)
app.use(
  '/assets',
  express.static(path.join(__dirname, '..', 'build', 'assets'))
)

app.use('/', universalLoader)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('App listening on port ' + port)
})
