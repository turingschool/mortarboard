// @flow
import { gql, graphql } from 'react-apollo'

const ApplicantQuery = gql`
  query post($id: ID!) {
    Applicant(id: $id) {
      applyAction
      applyStatus
      birthdate
      createdAt
      email
      firstName
      github
      id
      lastName
      referredBy
      resume
      scoreLogicEvaluation
      scoreOnlineLogicTest
      scoreValuesEvaluation
      startDate
    }
  }
`

export default graphql(ApplicantQuery, {
  // Yo! Needs to be wrapped with RR... :(
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
