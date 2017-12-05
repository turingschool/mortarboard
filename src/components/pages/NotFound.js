// @flow
import React from 'react'
import glamorous from 'glamorous'
import Title from '../elements/Title'

export default () => (
  <View>
    <Title>Not Found</Title>
  </View>
)

// -------------------------------------

const View = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})
