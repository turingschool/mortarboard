// @flow
import glamorous from 'glamorous'

const rules = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: 34,
  fontWeight: 200,
  color: '#808080',
}

export default glamorous.h2(
  rules,
  ({ children, ...props }) => ({ ...props }),
)
