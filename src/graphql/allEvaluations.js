// @flow
import { gql } from 'react-apollo'

export default gql`
  query allEvaluations {
    allEvaluations(orderBy: createdAt_ASC) {
      id
      name
    }
  }
`
