// @flow
import React from 'react'
import glamorous from 'glamorous'
import AppContainment from '../components/elements/AppContainment'

export default () => (
  <AppContainment>
    <View>Not Found</View>
  </AppContainment>
)

const View = glamorous.div({
  fontWeight: 600,
})
