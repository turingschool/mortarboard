// @flow
import glamorous from 'glamorous'
import { color, fontSize, space } from 'styled-system'
import { defaultProps } from 'recompose'
import { COLORS } from '../../constants/theme'

export default defaultProps({
  role: 'button',
})(glamorous.button(
  {
    position: 'relative',
    zIndex: 2,
    color: COLORS.BLUE,
    textDecoration: 'none',
    transition: 'color 200ms',
  },
  space,
  fontSize,
  color,
))
