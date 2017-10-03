// @flow
import { gql, graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import { pick } from 'ramda'
import { branch, compose, mapProps, onlyUpdateForKeys, renderComponent } from 'recompose'
import deleteApplicant from '../mutations/deleteApplicant'
import ApplicantDashboard, { ComponentLoader } from '../components/ApplicantDashboard'
// import withLog from './withLog'

const ApplicantQuery = gql`
  query post($id: ID!) {
    Applicant(id: $id) {
      applyAction
      applyStatus
      birthdate
      createdAt
      email
      firstName
      github
      id
      lastName
      referredBy
      resume
      scoreLogicEvaluation
      scoreOnlineLogicTest
      scoreValuesEvaluation
      startDate
    }
  }
`

const withData = graphql(ApplicantQuery, {
  options: ({ match }) => ({
    variables: {
      id: match.params.id,
    },
  }),
  props: ({ data: { Applicant, loading } }) => ({
    applicant: Applicant || null,
    isLoading: loading,
  }),
})

const propsWhitelist = ['applicant', 'isLoading', 'match']
const withProps = mapProps(props => ({
  ...pick(propsWhitelist, props),
}))

const keyWhitelist = ['isLoading', 'applicant']
const withUpdateForKeys = component => compose(
  onlyUpdateForKeys(keyWhitelist),
)(component)

const withMutations = component => compose(
  graphql(deleteApplicant, { name: 'deleteApplicant' }),
)(component)

const withLoader = branch(
  props => props.isLoading,
  renderComponent(ComponentLoader),
)

export default compose(
  withRouter,
  withData,
  withProps,
  withUpdateForKeys,
  withMutations,
  // withLog,
  withLoader,
)(ApplicantDashboard)
