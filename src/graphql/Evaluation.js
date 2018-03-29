// @flow
import gql from 'graphql-tag'

export default gql`
  query evaluation($id: ID!) {
    evaluation(id: $id) {
      id
      # concerns: String
      criteria {
        id
        notes
        options
        questions
        score
        title
      }
      # red_flag: Boolean
      # red_flag_comments: String
      # slug: String!
      # strengths: String
      title
    }
  }
`
