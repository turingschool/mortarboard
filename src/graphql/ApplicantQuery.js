// @flow
import gql from 'graphql-tag'

export default gql`
  query ApplicantQuery($id: ID!) {
    Applicant(id: $id) {
      id
      action {
        id
        label
        message
        name
      }
      applications {
        id
        complete
        evaluators {
          id
          firstName
          lastName
        }
        scoreLogicEvaluation
        scoreOnlineLogicTest
        scoreValuesEvaluation
      }
      birthdate
      createdAt
      email
      firstName
      github
      lastName
      referredBy
      resume
      status
      startDate
    }
  }
`
