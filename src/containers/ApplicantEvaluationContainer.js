// @flow
import { withRouter } from 'react-router-dom'
import { compose, pick } from 'ramda'
import { branch, mapProps, onlyUpdateForKeys, renderComponent } from 'recompose'
import ApplicantModule, { ComponentLoader } from '../components/modules/ApplicantModule'
import withApplicant from './withApplicant'

const applicantWhitelist = [
  'birthDate',
  'email',
  'firstName',
  'github',
  'lastName',
  'resume',
]

const withProps = mapProps(props => ({
  applicant: props.applicant ? pick(applicantWhitelist, props.applicant) : null,
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
  withApplicant,
  withProps,
  withUpdateForKeys,
  withLoader,
)(ApplicantModule)
