// @flow
import { withRouter } from 'react-router-dom'
import { memoize } from 'ramda'
import { compose, mapProps, pure } from 'recompose'
import NavBar from '../components/NavBar'

const selectGoBack = memoize(props => (
  props.location.pathname !== '/' ? props.history.goBack : null
))

const withProps = mapProps(props => ({
  goBack: selectGoBack(props),
}))

export default compose(
  withRouter,
  withProps,
  pure,
)(NavBar)
