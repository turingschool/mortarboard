// @flow
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import { assoc, compose, map, mergeAll, omit, path, pathOr, propOr } from 'ramda'
import { branch, mapProps, pure, renderComponent, withStateHandlers } from 'recompose'
import { nool } from '../lib/utils'
import EvaluationQuery from '../graphql/Evaluation'
import Criteria, { ModuleLoader } from '../components/modules/Criteria'
import { deriveName } from '../types/Criterion'

const initialState = compose(
  mergeAll,
  map(criterion => ({ [criterion.title]: null })),
  pathOr(nool, ['criteria']),
)

const normalizedCriteria = compose(
  map(criterion => assoc('name', deriveName(criterion), criterion)),
  propOr(nool, 'criteria'),
)

const withData = graphql(EvaluationQuery, {
  options: ({ match }) => ({
    variables: {
      id: path(['params', 'evaluationId'], match),
    },
  }),
  props: ({ data: { evaluation, loading, refetch } }) => ({
    criteria: normalizedCriteria(evaluation),
    isLoading: loading,
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
