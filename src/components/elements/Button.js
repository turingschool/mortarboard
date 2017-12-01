// @flow
import glamorous from 'glamorous'
import { color, space } from 'styled-system'
import { defaultProps } from 'recompose'
import { noob } from '../../lib/utils'
import { COLORS } from '../../constants/theme'

const box = {
  minWidth: 240,
  height: 48,
  paddingLeft: 32,
  paddingRight: 32,
  fontSize: 14,
  textTransform: 'uppercase',
}

const primary = {
  color: COLORS.WHITE,
  backgroundColor: COLORS.GREY_4,
}

const secondary = {
  color: COLORS.WHITE,
  backgroundColor: COLORS.GREY_9,
}

export default defaultProps({
  role: 'button',
})(glamorous.button(
  {
    textAlign: 'left',
  },
  props => ({
    ...(props.box ? box : noob),
    ...(props.primary ? primary : noob),
    ...(props.secondary ? secondary : noob),
  }),
  space,
  color,
))
