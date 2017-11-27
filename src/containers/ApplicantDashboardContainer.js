// @flow
import { withRouter } from 'react-router-dom'
import { compose, head, join, map, omit, path } from 'ramda'
import { branch, mapProps, onlyUpdateForKeys, renderComponent, withStateHandlers } from 'recompose'
import withApplicant from './withApplicant'
import ApplicantModule, { ComponentLoader } from '../components/modules/ApplicantModule'

const deriveEvaluatorList = compose(
  join(', '),
  map(evaluator => `${evaluator.firstName} ${evaluator.lastName}`),
  path(['evaluators']),
  head,
  path(['applications']),
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
  evaluatorList: deriveEvaluatorList(props.applicant),
}))

const keyWhitelist = ['applicant', 'isLoading', 'isModalOpen', 'recommendationValue']
const withUpdateForKeys = component => compose(onlyUpdateForKeys(keyWhitelist))(component)

export default compose(
  withRouter,
  withApplicant,
  withLoader,
  withStateEvents,
  withProps,
  withUpdateForKeys,
)(ApplicantModule)
