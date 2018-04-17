// @flow
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import { compose, pick, path, propOr } from 'ramda'
import { mapProps, pure } from 'recompose'
import EvaluationQuery from '../graphql/Evaluation'
import PageTitle from '../components/blocks/PageTitle'

const withData = graphql(EvaluationQuery, {
  options: ({ match }) => ({
    variables: {
      id: path(['params', 'evaluationId'], match),
    },
  }),
  props: ({ data: { evaluation } }) => ({
    children: propOr('', 'title', evaluation),
  }),
})

const picks = ['children']
const pickProps = mapProps(props => ({
  ...pick(picks, props),
}))

export default compose(
  withRouter,
  withData,
  pickProps,
  pure,
)(PageTitle)
