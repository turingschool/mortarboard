// @flow
import { withRouter } from 'react-router-dom'
import { compose, path } from 'ramda'
import { mapProps, pure, withHandlers, withState } from 'recompose'
import SearchBar from '../components/modules/SearchBar'

const withProps = mapProps(props => ({
  ...props,
  forId: 'SearchBar',
  action: props.location.pathname,
}))

const withEventHandlers = withHandlers({
  handleChange: props => (e) => {
    props.setValue(path(['target', 'value'], e))
  },
  handleSubmit: props => (e) => {
    e.preventDefault()
    return props
  },
})

export default compose(
  withRouter,
  withProps,
  withState('value', 'setValue', ''),
  withEventHandlers,
  pure,
)(SearchBar)
