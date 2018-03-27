// @flow
import { withRouter } from 'react-router-dom'
import { assoc, compose, dissoc, pick } from 'ramda'
import { branch, mapProps, onlyUpdateForKeys, renderComponent } from 'recompose'
import ApplicantModule, { ComponentLoader } from '../components/modules/ApplicantModule'
import withApplication from './withApplication'

const applicantWhitelist = [
  'birthDate',
  'email',
  'firstName',
  'lastName',
  'login',
  'loginLink',
]

const normalizedApplication = application => compose(
  dissoc('resume'),
  dissoc('statusLevel'),
  dissoc('status'),
  assoc('applicant', pick(applicantWhitelist, application.applicant)),
)(application)

const withProps = mapProps(props => ({
  application: props.application ? normalizedApplication(props.application) : null,
  isLoading: props.isLoading,
  match: props.match,
}))

const keyWhitelist = ['applicant', 'isLoading']

const withUpdateForKeys = component => compose(onlyUpdateForKeys(keyWhitelist))(component)

const withLoader = branch(
  props => props.isLoading,
  renderComponent(ComponentLoader),
)

export default compose(
  withRouter,
  withApplication,
  withProps,
  withUpdateForKeys,
  withLoader,
)(ApplicantModule)
