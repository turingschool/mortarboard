// @flow
import React, { type Node } from 'react'
import glamorous from 'glamorous'
import { ANIMATE_ROTATE, COLORS, EASE } from '../../constants/theme'

type Props = {
  children: Node,
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
  borderColor: COLORS.GREY_4,
  animation: `${ANIMATE_ROTATE} 1.03333s infinite ${EASE.IN_OUT_CUBIC}`,
})
