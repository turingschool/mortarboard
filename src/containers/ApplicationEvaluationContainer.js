// @flow
import { withRouter } from 'react-router-dom'
import { assoc, compose, pick } from 'ramda'
import { branch, mapProps, onlyUpdateForKeys, renderComponent } from 'recompose'
import ApplicantModule, { ComponentLoader } from '../components/modules/ApplicantModule'
import withApplication from './withApplication'

const applicantWhitelist = [
  'birthDate',
  'email',
  'firstName',
  'github',
  'lastName',
  'resume',
]

/* eslint-disable function-paren-newline */
const normalizedApplication = application => compose(
  assoc('applicant', pick(applicantWhitelist, application.applicant)),
)(application)
/* eslint-enable function-paren-newline */

const withProps = mapProps(props => ({
  // application: props.applicant ? pick(applicantWhitelist, props.applicant) : null,
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
