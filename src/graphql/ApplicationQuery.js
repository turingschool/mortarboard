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
        github_id
        name
        referred_by
        # resume
        # status
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
    }
  }
`
