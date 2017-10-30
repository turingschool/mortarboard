// @flow
import { gql } from 'react-apollo'

export default gql`
  query allApplicants {
    allApplicants(orderBy: createdAt_ASC) {
      applyAction
      applyStatus
      email
      firstName
      github
      id
      lastName
    }
  }
`
