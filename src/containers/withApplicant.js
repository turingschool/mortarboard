// @flow
import { graphql } from 'react-apollo'
import ApplicantQuery from '../graphql/ApplicantQuery'

// Yo! Needs to be wrapped with RR...
export default graphql(ApplicantQuery, {
  options: ({ match }) => ({
    variables: {
      id: match.params.id,
    },
  }),
  props: ({ data: { Applicant, loading } }) => ({
    applicant: Applicant || null,
    isLoading: loading,
  }),
})
