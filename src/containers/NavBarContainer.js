// @flow
import { withRouter } from 'react-router-dom'
import { compose, mapProps, pure } from 'recompose'
import { BASE_URL } from '../constants/networking'
import NavBar from '../components/modules/NavBar'

const isRoot = ({ location }) => (
  location.pathname === '/' || location.pathname === BASE_URL
)

const withProps = mapProps(props => ({
  goBack: isRoot(props) ? null : props.history.goBack,
}))

export default compose(
  withRouter,
  withProps,
  pure,
)(NavBar)
