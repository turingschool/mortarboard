// @flow
import { withRouter } from 'react-router-dom'
import { compose, equals, not, or, path } from 'ramda'
import { branch, mapProps, pure, renderComponent } from 'recompose'
import { log } from '../lib/utils'
import { BASE_URL } from '../constants/networking'
import NavBar, { Nav } from '../components/modules/NavBar'

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
  displayName: 'NavBarContainer',
  isAuthenticated: isAuthenticated(props),
  goBack: isRoot(props) ? null : path(['history', 'goBack'], props),
  base: BASE_URL,
}))

const hideIfNotAuthenticated = branch(
  props => not(props.isAuthenticated),
  renderComponent(Nav),
)

export default compose(
  withRouter,
  withProps,
  log,
  hideIfNotAuthenticated,
  pure,
)(NavBar)
