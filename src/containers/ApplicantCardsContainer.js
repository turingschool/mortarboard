// @flow
import { gql, graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import { pick } from 'ramda'
import { branch, compose, mapProps, renderComponent } from 'recompose'
import ApplicantCards, { ComponentLoader } from '../components/ApplicantCards'

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

const withData = graphql(ApplicantsQuery, {
  props: ({ data: { allApplicants, loading, refetch } }) => ({
    logName: 'CardsContainer',
    allApplicants: allApplicants || null,
    isLoading: loading,
    refetch,
  }),
})

const propsWhitelist = ['allApplicants', 'isLoading', 'location', 'refetch']
const withProps = mapProps(props => ({
  ...pick(propsWhitelist, props),
}))

const withLoader = branch(
  props => props.isLoading,
  renderComponent(ComponentLoader),
)

export default compose(
  withRouter,
  withData,
  withProps,
  withLoader,
)(ApplicantCards)
