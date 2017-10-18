// @flow
import React, { type Node } from 'react'
import glamorous from 'glamorous'
import { RocketIcon } from '../elements/Icons'

type Props = {
  children: Node,
}

export default ({ children, ...props }: Props) => (
  <View {...props}>
    <RocketIcon width={24} height={24} marginRight={12} />
    <Text>{children}</Text>
  </View>
)

// -------------------------------------

const View = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
})

const Text = glamorous.span({
  fontSize: 14,
  fontWeight: 600,
  textTransform: 'uppercase',
  color: '#666',
})
