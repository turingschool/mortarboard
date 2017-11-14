// @flow
import React from 'react'
import Dialog from '../blocks/Dialog'

type Props = {
  handleCancel: Function,
  handleConfirm: Function,
}

export default({ handleCancel, handleConfirm }: Props) => (
  <Dialog
    confirmLabel="Yes, I'm sure"
    handleCancel={handleCancel}
    handleConfirm={handleConfirm}
    title="Are you sure?"
  >
    Clicking yes will confirm the action. Clicking cancel will abort this dialog.
  </Dialog>
)
