// @flow
import glamorous from 'glamorous'

const rules = {
  position: 'relative',
  maxWidth: 960,
  marginRight: 'auto',
  marginLeft: 'auto',
}

export default glamorous.section(
  rules,
  ({ children, ...props }) => ({ ...props }),
)
