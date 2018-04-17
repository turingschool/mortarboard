// @flow
import { withRouter } from 'react-router-dom'
import { __, always, compose, isEmpty, join, map, omit, pathOr, prop, when } from 'ramda'
import { branch, mapProps, onlyUpdateForKeys, renderComponent, withHandlers, withStateHandlers } from 'recompose'
import { nool } from '../lib/utils'
import { needsSendStatus, needsSubmitEvaluation } from '../types/Application'
import withApplication from './withApplication'
import ApplicantModule, { ComponentLoader } from '../components/modules/ApplicantModule'

const deriveEvaluatorList = compose(
  join(', '),
  when(isEmpty(__), always(['N/A'])),
  map(evaluator => evaluator.name),
  pathOr(nool, ['evaluators']),
)

const canSendStatus = compose(
  isSendStatus => (isSendStatus === true ? false : null),
  needsSendStatus,
  prop('application'),
)

const canSubmitEvaluation = compose(
  isSubmitEvaluation => (isSubmitEvaluation === true ? false : null),
  needsSubmitEvaluation,
  prop('application'),
)

const getNextDialogCloseState = bool => (
  bool === true ? false : bool
)

const withLoader = branch(
  props => props.isLoading,
  renderComponent(ComponentLoader),
)

const withEventHandlers = withHandlers({
  handleStatusMutation: props => (e) => {
    // eslint-disable-next-line
    console.log(props, e.target.dataset.id)
  },
})

const withStateEvents = withStateHandlers(
  props => ({
    isModalOpen: false,
    isSendStatusDialog: canSendStatus(props),
    isSubmitEvaluationDialog: canSubmitEvaluation(props),
    statusValue: '',
  }),
  {
    handleCloseModal: ({ isSendStatusDialog, isSubmitEvaluationDialog }) => () => ({
      isModalOpen: false,
      isSendStatusDialog: getNextDialogCloseState(isSendStatusDialog),
      isSubmitEvaluationDialog: getNextDialogCloseState(isSubmitEvaluationDialog),
    }),
    handleOpenSendStatus: () => () => ({
      isModalOpen: true,
      isSendStatusDialog: true,
    }),
    handleOpenSubmitEvaluation: () => () => ({
      isModalOpen: true,
      isSubmitEvaluationDialog: true,
    }),
    handleStatusSelect: () => e => ({
      statusValue: e.target.value,
    }),
  },
)

const omits = ['history', 'location']
const withProps = mapProps(props => ({
  ...omit(omits, props),
  evaluatorList: deriveEvaluatorList(props.application),
  showScores: true,
}))

const keyWhitelist = ['application', 'isLoading', 'isModalOpen', 'statusLabel']
const withUpdateForKeys = component => compose(onlyUpdateForKeys(keyWhitelist))(component)

export default compose(
  withRouter,
  withApplication,
  withLoader,
  withStateEvents,
  withEventHandlers,
  withProps,
  withUpdateForKeys,
)(ApplicantModule)
