// @flow
import { gql, graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import ApplicantCards from '../components/ApplicantCards'

const ApplicantsQuery = gql`
  query allApplicants {
    allApplicants(orderBy: createdAt_ASC) {
      applyAction
      applyStatus
      email
      firstName
      github
      id
      lastName
    }
  }
`

const ApplicantCardsWithData = graphql(ApplicantsQuery, {
  // $FlowFixMe
  options: {
    fetchPolicy: 'network-only',
  },
})(ApplicantCards)

export default withRouter(ApplicantCardsWithData)
