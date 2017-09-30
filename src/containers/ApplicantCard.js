// @flow
import { gql, graphql } from 'react-apollo'
import ApplicantCard from '../components/ApplicantCard'

const deleteMutation = gql`
  mutation deleteApplicant($id: ID!) {
    deleteApplicant(id: $id) {
      id
    }
  }
`
export default graphql(deleteMutation)(ApplicantCard)
