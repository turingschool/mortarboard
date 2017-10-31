// @flow
import glamorous from 'glamorous'
import Link from './Link'
import { COLORS } from '../../constants/theme'

export default glamorous(Link)(
  {
    position: 'relative',
    zIndex: 2,
    color: COLORS.BLUE,
    textDecoration: 'none',
    transition: 'color 200ms',
  },
  ({ fontSize }) => ({
    fontSize: fontSize || null,
  }),
)
