// @flow
import { camelizeKeys } from 'humps'
import { graphql } from 'react-apollo'
import { assoc, compose, defaultTo, path } from 'ramda'
import { noob } from '../lib/utils'
import ApplicationQuery from '../graphql/ApplicationQuery'
import { deriveFirstName, deriveLastName, deriveLoginLink } from '../types/Applicant'

const normalizedApplicant = applicant => compose(
  assoc('action', { id: 1, label: '??? Action', name: 'Action name ???' }),
  assoc('status', '??? status'),
  assoc('resume', '??? resume'),
  assoc('firstName', deriveFirstName(applicant)),
  assoc('lastName', deriveLastName(applicant)),
  assoc('loginLink', deriveLoginLink(applicant)),
)(applicant)

const normalizeProps = application => compose(
  assoc('createdAt', '??? createdAt'),
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
