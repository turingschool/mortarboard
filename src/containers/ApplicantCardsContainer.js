// @flow
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import { pick } from 'ramda'
import { branch, compose, mapProps, renderComponent } from 'recompose'
import allApplicantsQuery from '../graphql/allApplicants'
import ApplicantCards, { ComponentLoader } from '../components/modules/ApplicantCards'

const withData = graphql(allApplicantsQuery, {
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
