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
        created_at
        email
        facebook_id
        github_id
        login
        name
        referred_by
        # startDate
      }
      cohort
      complete
      # evaluators {
      #   id
      #   name
      # }
      resume
      # scoreLogicEvaluation
      scoreOnlineLogicTest
      # scoreValuesEvaluation
      status
    }
  }
`
