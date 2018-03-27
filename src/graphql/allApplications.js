// @flow
import gql from 'graphql-tag'

export default gql`
  query allApplications {
    allApplications {
      id
      # action {
      #   id
      #   label
      #   name
      # }
      applicant {
        id
        email
        facebook_id
        github_id
        login
        name
      }
      status
    }
  }
`
