// @flow
import { withRouter } from 'react-router-dom'
import { pick } from 'ramda'
import {
  branch,
  compose,
  mapProps,
  onlyUpdateForKeys,
  renderComponent,
} from 'recompose'
import ApplicantModule, { ComponentLoader } from '../components/modules/ApplicantModule'
import withApplicant from './withApplicant'

const propsWhitelist = ['applicant', 'isLoading', 'match']
const withProps = mapProps(props => ({
  ...pick(propsWhitelist, props),
  replace: props.history.replace,
}))

const keyWhitelist = ['isLoading', 'applicant']
const withUpdateForKeys = component => compose(onlyUpdateForKeys(keyWhitelist))(component)

const withLoader = branch(
  props => props.isLoading,
  renderComponent(ComponentLoader),
)

export default compose(
  withRouter,
  withApplicant,
  withProps,
  withUpdateForKeys,
  withLoader,
)(ApplicantModule)
