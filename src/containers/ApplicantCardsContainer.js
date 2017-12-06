// @flow
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import { compose, defaultTo, omit } from 'ramda'
import { branch, mapProps, renderComponent } from 'recompose'
import { nool, log } from '../lib/utils'
import allApplicantsQuery from '../graphql/allApplicants'
import ApplicantCards, { ComponentLoader } from '../components/modules/ApplicantCards'

const withData = graphql(allApplicantsQuery, {
  props: ({ data: { allApplicants, loading, refetch } }) => ({
    allApplicants: defaultTo(nool, allApplicants),
    isLoading: loading,
    refetch,
  }),
})

const omits = ['history', 'match']
const omitProps = mapProps(props => ({
  ...omit(omits, props),
  displayName: 'ApplicantCardsContainer',
}))

const withLoader = branch(
  props => props.isLoading,
  renderComponent(ComponentLoader),
)

export default compose(
  withRouter,
  withData,
  log,
  omitProps,
  withLoader,
)(ApplicantCards)
