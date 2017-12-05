// @flow
import React from 'react'
import glamorous from 'glamorous'
import type { RouterHistory } from 'react-router-dom'
import Button from '../elements/Button'
import ImageLink from '../elements/Link'
import Title from '../elements/Title'
import TuringMark from '../elements/TuringMark'

type Props = {
  history: RouterHistory,
}

export default (props: Props) => (
  <View>
    <ImageLink to="/">
      <TuringMark />
    </ImageLink>
    <Title mt={32}>Turing Apply</Title>
    <Button box centered primary mt={32} onClick={() => { props.history.push('/') }}>
      Authenticate with GitHub
    </Button>
  </View>
)

// -------------------------------------

const View = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})
