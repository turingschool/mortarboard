// @flow
import React from 'react'
import glamorous from 'glamorous'
import { RocketIcon } from '../elements/Icons'

type Props = {
  children: React.Element<*>,
}

export default ({ children, ...props }: Props) => (
  <View {...props}>
    <RocketIcon width={24} height={24} marginRight={12} />
    <Text>{children}</Text>
  </View>
)

// -------------------------------------

const rules = {
  display: 'flex',
  flexDirection: 'row',
}

const View = glamorous.div(
  rules,
  ({ children, ...props }) => ({ ...props }),
)

const Text = glamorous.span({
  fontSize: 14,
  fontWeight: 600,
  textTransform: 'uppercase',
  color: '#666',
})
