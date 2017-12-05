// @flow
import { withRouter } from 'react-router-dom'
import { compose, equals, not, or, path } from 'ramda'
import { branch, mapProps, pure, renderNothing } from 'recompose'
import { BASE_URL } from '../constants/networking'
import NavBar from '../components/modules/NavBar'

const isRoot = compose(
  or(equals('/'), equals(BASE_URL)),
  path(['location', 'pathname']),
)

// TODO: Placeholder
const isAuthenticated = compose(
  not,
  equals('/login'),
  path(['location', 'pathname']),
)

const withProps = mapProps(props => ({
  isAuthenticated: isAuthenticated(props),
  goBack: isRoot(props) ? null : path(['history', 'goBack'], props),
}))

const hideIfNotAuthenticated = branch(
  props => not(props.isAuthenticated),
  renderNothing,
)

export default compose(
  withRouter,
  withProps,
  hideIfNotAuthenticated,
  pure,
)(NavBar)
