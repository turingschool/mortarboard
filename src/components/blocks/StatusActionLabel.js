// @flow
import React from 'react'
import glamorous from 'glamorous'
import { ErrorIcon, ResetIcon, RocketIcon } from '../elements/Icons'
import { COLORS } from '../../constants/theme'
import type { Action } from '../../types/Action'

type Props = {
  status: Action,
}

const Icon = ({ status }: Props) => {
  switch (status.name) {
    case 'mismatch':
      return <ErrorIcon marginRight={10} />
    case 'reset':
      return <ResetIcon marginRight={10} />
    default:
      return <RocketIcon width={24} height={24} marginRight={12} />
  }
}

export default ({ status, ...props }: Props) => (
  <View status={status} {...props}>
    <Icon status={status} />
    <Text>{status.label}</Text>
  </View>
)

// -------------------------------------

const View = glamorous.div(
  {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: COLORS.GREY_6,
  },
  ({ color, status }) => ({
    color: status.name === 'mismatch' ? COLORS.RED : color,
  }),
)

const Text = glamorous.span({
  fontSize: 14,
  fontWeight: 600,
  textTransform: 'uppercase',
})
