// @flow
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import { pick } from 'ramda'
import { branch, compose, mapProps, renderComponent } from 'recompose'
import allEvaluationsQuery from '../graphql/allEvaluations'
import Evaluations, { ModuleLoader } from '../components/modules/Evaluations'
import withLog from '../lib/withLog'

const withData = graphql(allEvaluationsQuery, {
  props: ({ data: { allEvaluations, loading, refetch } }) => ({
    allEvaluations: allEvaluations || null,
    isLoading: loading,
    refetch,
    logName: 'EvaluationsContainer',
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
  withLog,
)(Evaluations)
