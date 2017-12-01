// @flow
import { graphql } from 'react-apollo'
import { defaultTo, path } from 'ramda'
import ApplicantQuery from '../graphql/ApplicantQuery'

// Yo! Needs to be wrapped with RR...
export default graphql(ApplicantQuery, {
  options: ({ match }) => ({
    variables: {
      id: path(['params', 'id'], match),
    },
  }),
  props: ({ data: { Applicant, loading } }) => ({
    applicant: defaultTo(null, Applicant),
    isLoading: loading,
  }),
})
