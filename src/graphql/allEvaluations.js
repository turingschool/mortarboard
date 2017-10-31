// @flow
import { gql } from 'react-apollo'

export default gql`
  query allEvaluations($type: String!) {
    allEvaluations(filter: {
    type: $type
  }) {
      id
      name
      questions
      criteria
    }
  }
`
