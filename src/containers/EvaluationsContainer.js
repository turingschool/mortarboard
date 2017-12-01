// @flow
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import { compose, map, mergeAll, omit, pathOr, prop } from 'ramda'
import { branch, mapProps, pure, renderComponent, withStateHandlers } from 'recompose'
import { nool } from '../lib/utils'
import EvaluationQuery from '../graphql/Evaluation'
import Criteria, { ModuleLoader } from '../components/modules/Criteria'

const initialState = compose(
  mergeAll,
  map(criterion => ({ [criterion.name]: null })),
  pathOr(nool, ['criteria']),
)

const withData = graphql(EvaluationQuery, {
  options: ({ type }) => ({
    variables: {
      name: type,
    },
  }),
  props: ({ data: { Evaluation, loading, refetch } }) => ({
    criteria: prop('criteria', Evaluation),
    isLoading: loading,
    name: prop('name', Evaluation),
    refetch,
  }),
})

const omits = ['history', 'match']
const omitProps = mapProps(props => ({
  ...omit(omits, props),
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
  omitProps,
  withLoader,
  withStateUpdates,
  pure,
)(Criteria)
