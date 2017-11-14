// @flow
import glamorous from 'glamorous'
import { defaultProps } from 'recompose'
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
    marginTop: props.mt || props.marginTop,
    color: props.color,
    backgroundColor: props.backgroundColor,
    ...(props.box ? box : {}),
    ...(props.primary ? primary : {}),
    ...(props.secondary ? secondary : {}),
  }),
))
