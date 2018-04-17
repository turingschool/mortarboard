// @flow
import gql from 'graphql-tag'

export default gql`
  query allApplications {
    allApplications {
      id
      applicant {
        id
        email
        facebook_id
        github_id
        login
        name
      }
      # scoreLogicEvaluation # Blows up in GraphiQL
      scoreOnlineLogicTest
      # scoreValuesEvaluation # Blows up in GraphiQL
      status
    }
  }
`
