// @flow
import { withRouter } from 'react-router-dom'
import { __, always, compose, head, join, map, omit, pathOr, when, isEmpty } from 'ramda'
import { branch, mapProps, onlyUpdateForKeys, renderComponent, withStateHandlers } from 'recompose'
import { nool } from '../lib/utils'
import withApplication from './withApplication'
import ApplicantModule, { ComponentLoader } from '../components/modules/ApplicantModule'

const deriveEvaluatorList = compose(
  join(', '),
  when(isEmpty(__), always(['N/A'])),
  map(evaluator => `${evaluator.firstName} ${evaluator.lastName}`),
  pathOr(nool, ['evaluators']),
  head,
  pathOr(nool, ['applications']),
)

const withLoader = branch(
  props => props.isLoading,
  renderComponent(ComponentLoader),
)

const withStateEvents = withStateHandlers(
  () => ({
    isModalOpen: false,
    isConfirmDialog: false,
    isSendRecommendationDialog: false,
    isSendStatusDialog: false,
    recommendationValue: '',
    statusValue: '',
  }),
  {
    handleCloseModal: () => () => ({
      isModalOpen: false,
      isConfirmDialog: false,
      isSendRecommendationDialog: false,
      isSendStatusDialog: false,
    }),
    handleOpenConfirm: () => () => ({
      isModalOpen: true,
      isConfirmDialog: true,
    }),
    handleOpenSendRecommendation: () => () => ({
      isModalOpen: true,
      isSendRecommendationDialog: true,
    }),
    handleOpenSendStatus: () => () => ({
      isModalOpen: true,
      isSendStatusDialog: true,
    }),
    handleRecommendationSelect: () => e => ({
      recommendationValue: e.target.value,
    }),
    handleStatusSelect: () => e => ({
      statusValue: e.target.value,
    }),
  },
)

const omits = ['history', 'location']
const withProps = mapProps(props => ({
  ...omit(omits, props),
  hasScores: true,
  evaluatorList: deriveEvaluatorList(pathOr(null, ['application', 'applicant'], props)),
  // evaluatorList: deriveEvaluatorList(props.applicant),
}))

const keyWhitelist = ['application', 'isLoading', 'isModalOpen', 'recommendationValue', 'statusLabel']
const withUpdateForKeys = component => compose(onlyUpdateForKeys(keyWhitelist))(component)

export default compose(
  withRouter,
  withApplication,
  withLoader,
  withStateEvents,
  withProps,
  withUpdateForKeys,
)(ApplicantModule)
