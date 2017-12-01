// @flow
import { withRouter } from 'react-router-dom'
import { compose, equals, or, path } from 'ramda'
import { mapProps, pure } from 'recompose'
import { BASE_URL } from '../constants/networking'
import NavBar from '../components/modules/NavBar'

const isRoot = compose(
  or(equals('/'), equals(BASE_URL)),
  path(['location', 'pathname']),
)

const withProps = mapProps(props => ({
  goBack: isRoot(props) ? null : props.history.goBack,
}))

export default compose(
  withRouter,
  withProps,
  pure,
)(NavBar)
