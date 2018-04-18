// @flow
import { compose, prop } from 'ramda'
import { withProps, withStateHandlers } from 'recompose'
import { needsSendStatus, needsSubmitEvaluation } from '../types/Application'

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

const getHandleStatusMutation = (props) => {
  if (props.isSendStatusDialog != null) {
    return props.handleOpenSendStatus
  } else if (props.isSubmitEvaluationDialog != null) {
    return props.handleOpenSubmitEvaluation
  }
  // eslint-disable-next-line no-console
  // console.log(props, e.target.dataset.id)
  return null
}

const getNextDialogCloseState = bool => (
  bool === true ? false : bool
)

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

const withHandleStatusMutation = withProps(props => ({
  handleStatusMutation: getHandleStatusMutation(props),
}))

export default compose(
  withStateEvents,
  withHandleStatusMutation,
)
