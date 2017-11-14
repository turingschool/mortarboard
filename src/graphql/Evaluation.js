// @flow
import { gql } from 'react-apollo'

export default gql`
  query ($name: String!) {
    Evaluation(name: $name) {
      id
      name
      criteria {
        id
        label
        name
        options
        questions
      }
    }
  }
`