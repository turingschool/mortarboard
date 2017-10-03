// @flow
import glamorous from 'glamorous'

const rules = {
  display: 'flex',
  alignItems: 'center',
  marginLeft: 0,
  fontSize: 16,
  fontWeight: 200,
  color: 'currentColor',
}

export default glamorous.dd(
  rules,
  ({ children, ...props }) => ({ ...props }),
)
