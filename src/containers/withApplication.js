// @flow
import { camelizeKeys } from 'humps'
import { graphql } from 'react-apollo'
import { assoc, compose, defaultTo, path } from 'ramda'
import { noob } from '../lib/utils'
import ApplicationQuery from '../graphql/ApplicationQuery'
import { deriveFirstName, deriveLastName, deriveLoginLink } from '../types/Applicant'
import { deriveStatusLabel, deriveIsStatusMutatable } from '../types/Application'

const normalizedApplicant = applicant => compose(
  assoc('firstName', deriveFirstName(applicant)),
  assoc('lastName', deriveLastName(applicant)),
  assoc('loginLink', deriveLoginLink(applicant)),
)(applicant)

const normalizeProps = application => compose(
  assoc('isStatusMutatable', deriveIsStatusMutatable(application)),
  assoc('statusLabel', deriveStatusLabel(application)),
  assoc('applicant', normalizedApplicant(application.applicant)),
)(application)

const normalizedApplication = application => compose(
  normalizeProps,
  camelizeKeys,
  defaultTo(noob),
)(application)

// Yo! Needs to be wrapped with RR...
export default graphql(ApplicationQuery, {
  options: ({ match }) => ({
    variables: {
      id: path(['params', 'id'], match),
    },
  }),
  props: ({ data: { application, loading } }) => ({
    application: application != null ? normalizedApplication(application) : null,
    isLoading: loading,
  }),
})
