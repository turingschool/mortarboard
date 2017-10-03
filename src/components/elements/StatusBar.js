// @flow
import glamorous from 'glamorous'

const rules = {
  height: 4,
  backgroundColor: '#4d4d4d',
}

export default glamorous.div(
  rules,
  ({ children, ...props }) => ({ ...props }),
)
