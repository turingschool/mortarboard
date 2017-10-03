// @flow
import glamorous from 'glamorous'
import TextLink from './TextLink'

const rules = {
  display: 'inline-block',
  margin: '1.5em 0',
  fontSize: 18,
}

export default glamorous(TextLink)(
  rules,
  ({ children, ...props }) => ({ ...props }),
)
