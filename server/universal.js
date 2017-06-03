const path = require('path')
const fs = require('fs')
const React = require('react')
const { renderToString } = require('react-dom/server')
const { StaticRouter } = require('react-router-dom')
const { default: Content } = require('../src/components/content/Content.js')

module.exports = (req, res) => {
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html')
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('read err', err)
      return res.status(404).end()
    }
    const context = {}
    const markup = renderToString(
      <StaticRouter location={req.url} context={context}>
        <Content />
      </StaticRouter>
    )
    res.send(htmlData.replace('{{SSR}}', markup))
  })
}
