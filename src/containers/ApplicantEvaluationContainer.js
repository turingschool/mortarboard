// @flow
import { withRouter } from 'react-router-dom'
import { pick } from 'ramda'
import { branch, compose, mapProps, onlyUpdateForKeys, renderComponent } from 'recompose'
import ApplicantModule, { ComponentLoader } from '../components/modules/ApplicantModule'
import withApplicant from './withApplicant'
// import withLog from '../lib/withLog'

const applicantWhitelist = [
  'birthdate',
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

// const withMutations = component => compose(
// )(component)

const withLoader = branch(
  props => props.isLoading,
  renderComponent(ComponentLoader),
)

export default compose(
  withRouter,
  withApplicant,
  withProps,
  withUpdateForKeys,
  // withMutations,
  // withLog,
  withLoader,
)(ApplicantModule)
