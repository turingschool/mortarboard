// @flow
import { withRouter } from 'react-router-dom'
import { anyPass, compose, equals, not, path } from 'ramda'
import { branch, mapProps, pure, renderComponent } from 'recompose'
import { BASE_URL } from '../constants/networking'
import NavBar, { Nav } from '../components/modules/NavBar'

const equalsBase = [
  equals('/'),
  equals(BASE_URL),
  equals(`${BASE_URL}/`),
]

const isRoot = compose(
  anyPass(equalsBase),
  path(['location', 'pathname']),
)

// TODO: Placeholder
const isAuthenticated = compose(
  not,
  equals(`${BASE_URL}/login`),
  path(['location', 'pathname']),
)

const withProps = mapProps(props => ({
  isAuthenticated: isAuthenticated(props),
  goBack: isRoot(props) ? null : path(['history', 'goBack'], props),
}))

const hideIfNotAuthenticated = branch(
  props => not(props.isAuthenticated),
  renderComponent(Nav),
)

export default compose(
  withRouter,
  withProps,
  hideIfNotAuthenticated,
  pure,
)(NavBar)
