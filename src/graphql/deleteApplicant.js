import gql from 'graphql-tag'

export default gql`
  mutation deleteApplicant($id: ID!) {
    deleteApplicant(id: $id) {
      id
    }
  }
`
