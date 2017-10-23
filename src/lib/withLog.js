import { withProps } from 'recompose'

export default withProps(props => (
  // eslint-disable-next-line
  console.log(props.logName || props.displayName || '👍', props) && props
))
