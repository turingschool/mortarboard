// @flow
import glamorous from 'glamorous'

const rules = {
  position: 'relative',
  maxWidth: 1392,
  marginRight: 'auto',
  marginLeft: 'auto',
  paddingRight: 16,
  paddingBottom: 16,
  paddingLeft: 16,
}

export default glamorous.section(
  rules,
  ({ children, ...props }) => ({ ...props }),
)
