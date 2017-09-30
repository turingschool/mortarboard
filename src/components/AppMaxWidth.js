// @flow
import React from 'react'
import { Div } from 'glamorous'

const styles = {
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: 1360,
  // backgroundColor: 'lightBlue',
}

export default (props: any) => (
  <Div {...styles} {...props} />
)
