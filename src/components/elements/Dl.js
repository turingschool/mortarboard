// @flow
import glamorous from 'glamorous'

const rules = {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 8,
  marginBottom: 8,
}

export default glamorous.dl(
  rules,
  ({ children, ...props }) => ({ ...props }),
)
