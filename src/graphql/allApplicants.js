// @flow
import gql from 'graphql-tag'

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
