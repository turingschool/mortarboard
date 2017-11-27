// @flow
import { gql } from 'react-apollo'

export default gql`
  query ($id: ID!) {
    Applicant(id: $id) {
      action {
        label
        message
        name
      }
      applications {
        complete
        id
        evaluators {
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
      id
      lastName
      referredBy
      resume
      status
      startDate
    }
  }
`
