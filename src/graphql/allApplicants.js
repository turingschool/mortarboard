// @flow
import { gql } from 'react-apollo'

export default gql`
  query {
    allApplicants(orderBy: createdAt_ASC) {
      action {
        label
        name
      }
      email
      firstName
      github
      id
      lastName
      status
    }
  }
`
