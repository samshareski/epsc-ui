import React from 'react'
import CallToAction from '../call-to-action/CallToAction.js'
import MenuPreview from '../menu-preview/MenuPreview.js'
import Divider from '../divider/Divider.js'

const table = '/assets/yellow-table.svg'
const cta = {
  title: 'June 24, 2017: Barbecue',
  body: 'We may not have a grill, but there will be\nsome big bold flavours and lots of sangria',
  table: table,
  linkText: 'RSVP',
  linkTo: 'future'
}

const Future = () => (
  <div>
    <CallToAction {...cta} />
    <Divider />
    <MenuPreview />
    <Divider />
  </div>
)

export default Future
