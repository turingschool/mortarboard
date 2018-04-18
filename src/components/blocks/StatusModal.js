// @flow
import React from 'react'
import Modal from '../blocks/Modal'
import ConfirmDialog from '../modules/ConfirmDialog'
import SendStatusDialog from '../modules/SendStatusDialog'

export type StatusModalProps = {
  handleCloseModal: () => {},
  handleStatusSelect: () => {},
  isModalOpen: boolean,
  isSendStatusDialog: boolean,
  isSubmitEvaluationDialog: boolean,
  statusValue: string,
}

const StatusModal = (props: StatusModalProps) => (
  <Modal
    isOpen={props.isModalOpen}
    onRequestClose={props.handleCloseModal}
  >
    { props.isSendStatusDialog === true &&
    <SendStatusDialog
      handleCancel={props.handleCloseModal}
      handleChange={props.handleStatusSelect}
      handleConfirm={props.handleCloseModal}
      statusValue={props.statusValue}
    />
        }
    { props.isSubmitEvaluationDialog === true &&
    <ConfirmDialog
      handleCancel={props.handleCloseModal}
      handleConfirm={props.handleCloseModal}
    />
        }
  </Modal>
)

export default StatusModal
