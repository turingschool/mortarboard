// @flow
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import { compose, pick } from 'ramda'
import { branch, mapProps, pure, renderComponent } from 'recompose'
import allEvaluationsQuery from '../graphql/allEvaluations'
import Evaluations, { ModuleLoader } from '../components/modules/Evaluations'

const withData = graphql(allEvaluationsQuery, {
  options: ({ type }) => ({
    variables: {
      type,
    },
  }),
  props: ({ data: { allEvaluations, loading, refetch } }) => ({
    allEvaluations: allEvaluations || null,
    isLoading: loading,
    refetch,
  }),
})

const propsWhitelist = ['allEvaluations', 'location', 'isLoading', 'refetch']
const withProps = mapProps(props => ({
  ...pick(propsWhitelist, props),
}))

const withLoader = branch(
  props => props.isLoading,
  renderComponent(ModuleLoader),
)

export default compose(
  withRouter,
  withData,
  withProps,
  withLoader,
  pure,
)(Evaluations)
