import { gql } from 'react-apollo'

export default gql`
  mutation deleteApplicant($id: ID!) {
    deleteApplicant(id: $id) {
      id
    }
  }
`
