// @flow
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import { compose, map, mergeAll, pathOr, prop, pick } from 'ramda'
import { branch, mapProps, pure, renderComponent, withStateHandlers } from 'recompose'
import EvaluationQuery from '../graphql/Evaluation'
import Criteria, { ModuleLoader } from '../components/modules/Criteria'
import withLog from '../lib/withLog'

const initialState = compose(
  mergeAll,
  map(criterion => ({ [criterion.name]: null })),
  pathOr([], ['criteria']),
)

const withData = graphql(EvaluationQuery, {
  options: ({ type }) => ({
    variables: {
      name: type,
    },
  }),
  props: ({ data: { Evaluation, loading, refetch, ...stuff } }) => ({
    criteria: prop('criteria', Evaluation),
    isLoading: loading,
    name: prop('name', Evaluation),
    refetch,
    ...stuff,
  }),
})

const propsWhitelist = ['criteria', 'location', 'isLoading', 'name', 'refetch']
const withProps = mapProps(props => ({
  ...pick(propsWhitelist, props),
}))

const withStateUpdates = withStateHandlers(
  props => ({
    ...initialState(props),
  }),
  {
    handleChange: () => e => ({
      [e.target.name]: e.target.value,
    }),
  },
)

const withLoader = branch(
  props => props.isLoading,
  renderComponent(ModuleLoader),
)

export default compose(
  withRouter,
  withData,
  withProps,
  withLoader,
  withStateUpdates,
  pure,
  withLog,
)(Criteria)
