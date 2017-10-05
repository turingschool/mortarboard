// @flow
import glamorous from 'glamorous'

const rules = {
  fontSize: 48,
  fontWeight: 200,
  color: '#808080',
}

export default glamorous.h1(
  rules,
  ({ children, ...props }) => ({ ...props }),
)
