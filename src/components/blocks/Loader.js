// @flow
import React from 'react'
import glamorous from 'glamorous'
import { animateRotate, easeInOutCubic } from '../../constants/style'

type Props = {
  children: React.Element<*>,
}

export default ({ children, ...props }: Props) => (
  <View {...props}>
    <Busy />
    {children}
  </View>
)

// -------------------------------------

const View = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
})

const Busy = glamorous.div({
  width: 16,
  height: 16,
  marginRight: 8,
  borderRadius: '50%',
  borderWidth: 2,
  borderStyle: 'dashed',
  borderColor: '#333',
  animation: `${animateRotate} 1.03333s infinite ${easeInOutCubic}`,
})
