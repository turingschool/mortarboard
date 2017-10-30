// @flow
import React from 'react'
import glamorous from 'glamorous'
import { GridOverlayWithKeyboard } from 'toolkitt'

export default () => (
  <Tool>
    <GridOverlayWithKeyboard
      isDisabled
      cycleKey="~"
      size={32}
      toggleKey="`"
    />
  </Tool>
)

// -------------------------------------

const Tool = glamorous.div({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 3000,
  pointerEvents: 'none',
})
