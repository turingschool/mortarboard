// @flow
import glamorous from 'glamorous'
import { color, fontSize, space } from 'styled-system'
import { COLORS } from '../../constants/theme'

export default glamorous.h2(
  {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 34,
    fontWeight: 200,
    color: COLORS.GREY_8,

  },
  space,
  fontSize,
  color,
)
