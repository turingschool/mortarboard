// @flow
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import { compose, prop, pick } from 'ramda'
import { branch, mapProps, pure, renderComponent } from 'recompose'
import EvaluationQuery from '../graphql/Evaluation'
import Criteria, { ModuleLoader } from '../components/modules/Criteria'

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
)(Criteria)
