// @flow
import glamorous from 'glamorous'

const rules = {
  fontSize: 14,
  fontWeight: 600,
  textTransform: 'uppercase',
  color: 'currentColor',
}

export default glamorous.dt(
  rules,
  ({ children, ...props }) => ({ ...props }),
)
