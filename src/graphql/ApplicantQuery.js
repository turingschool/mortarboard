// @flow
import { gql } from 'react-apollo'

export default gql`
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
