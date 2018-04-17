// @flow
import gql from 'graphql-tag'

export default gql`
  query ApplicationQuery($id: ID!) {
    application(id: $id) {
      id
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
        # avatar_url: String
        # english_proficiency: Boolean
        # finance: Boolean
        # gravatar_id: String
        # location: String
        # mac_proficiency: Boolean
        # obligations: Boolean
        # organizational_issues: Boolean
        # outside_obligations: Boolean
        # promo_code: String
        # recommendations: String
      }
      # cohort
      # complete
      evaluations {
        id
        title
      }
      evaluators {
        id
        name
        # email: String!
        # login: String!
      }
      resume
      # scoreLogicEvaluation
      scoreOnlineLogicTest
      # scoreValuesEvaluation
      status
    }
  }
`

