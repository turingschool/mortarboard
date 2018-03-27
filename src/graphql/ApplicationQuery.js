// @flow
import gql from 'graphql-tag'

export default gql`
  query ApplicationQuery($id: ID!) {
    application(id: $id) {
      id
      # action {
      #   id
      #   label
      #   message
      #   name
      # }
      applicant {
        id
        birth_date
        # createdAt
        email
        facebook_id
        github_id
        login
        name
        referred_by
        # resume
        # startDate
      }
      complete
      # evaluators {
      #   id
      #   name
      # }
      # scoreLogicEvaluation
      # scoreOnlineLogicTest
      # scoreValuesEvaluation
      status
    }
  }
`
