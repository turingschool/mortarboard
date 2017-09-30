// @flow
import { gql, graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import ApplicantHeader from '../components/ApplicantHeader'

const deleteMutation = gql`
  mutation deleteApplicant($id: ID!) {
    deleteApplicant(id: $id) {
      id
    }
  }
`

const ApplicantQuery = gql`
  query post($id: ID!) {
    Applicant(id: $id) {
      id
      firstName
      lastName
      birthdate
      email
      github
      startDate
      referredBy
      createdAt
      resume
      applyAction
      applyStatus
    }
  }
`

// update w/ react-router v4 url params api
// see documentation on computing query variables from props in wrapper
// http://dev.apollodata.com/react/queries.html#options-from-props
const ApplicantHeaderWithData = graphql(ApplicantQuery, {
  options: ({ match }) => ({
    variables: {
      id: match.params.id,
    },
  }),
})(ApplicantHeader)

const ApplicantHeaderWithDeleteAndData = graphql(deleteMutation)(ApplicantHeaderWithData)
export default withRouter(ApplicantHeaderWithDeleteAndData)
