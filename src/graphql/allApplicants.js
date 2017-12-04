// @flow
import gql from 'graphql-tag'

export default gql`
  query allApplicants {
    allApplicants(orderBy: createdAt_ASC) {
      id
      action {
        id
        label
        name
      }
      email
      firstName
      github
      lastName
      status
    }
  }
`
