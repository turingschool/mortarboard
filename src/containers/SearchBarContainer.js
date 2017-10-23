// @flow
import { withRouter } from 'react-router-dom'
import { compose, mapProps, pure, withHandlers, withState } from 'recompose'
import SearchBar from '../components/modules/SearchBar'
// import withLog from '../lib/withLog'

const withProps = mapProps(props => ({
  forId: 'SearchBar',
  action: props.location.pathname,
}))

const withEventHandlers = withHandlers({
  handleChange: props => (e) => {
    // console.log('Yo! Search form was changed!', props)
    props.setValue(e.target.value)
  },
  handleSubmit: props => (e) => {
    e.preventDefault()
    return props
    // console.log('Yo! Search form was submitted!', props)
  },
})

export default compose(
  withRouter,
  withProps,
  withState('value', 'setValue', ''),
  withEventHandlers,
  pure,
  // withLog,
)(SearchBar)
