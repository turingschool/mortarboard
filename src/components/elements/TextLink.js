// @flow
import glamorous from 'glamorous'
import Link from './Link'

const rules = {
  position: 'relative',
  zIndex: 2,
  color: '#35c5fc',
  textDecoration: 'none',
  transition: 'color 200ms',
}

export default glamorous(Link)(
  rules,
  ({ children, ...props }) => ({ ...props }),
)
