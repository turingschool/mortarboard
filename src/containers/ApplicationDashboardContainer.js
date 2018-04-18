// @flow
import { withRouter } from 'react-router-dom'
import { __, always, compose, isEmpty, join, map, omit, pathOr, when } from 'ramda'
import { branch, mapProps, onlyUpdateForKeys, renderComponent } from 'recompose'
import { nool } from '../lib/utils'
import withApplication from './withApplication'
import withStatusMutationEvents from './withStatusMutationEvents'
import ApplicantModule, { ComponentLoader } from '../components/modules/ApplicantModule'

const keyWhitelist = ['application', 'isLoading', 'isModalOpen', 'statusLabel']

const deriveEvaluatorList = compose(
  join(', '),
  when(isEmpty(__), always(['N/A'])),
  map(evaluator => evaluator.name),
  pathOr(nool, ['evaluators']),
)

const withLoader = branch(
  props => props.isLoading,
  renderComponent(ComponentLoader),
)

const omits = ['history', 'location']
const withProps = mapProps(props => ({
  ...omit(omits, props),
  evaluatorList: deriveEvaluatorList(props.application),
  showScores: true,
}))

export default compose(
  withRouter,
  withApplication,
  withLoader,
  withProps,
  withStatusMutationEvents,
  onlyUpdateForKeys(keyWhitelist),
)(ApplicantModule)
