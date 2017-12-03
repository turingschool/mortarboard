// @flow
import React, { type Node } from 'react'
import { css } from 'glamor'
import Modal from 'react-modal'
import { ZZZ } from '../../constants/theme'

type Props = {
  children: Node,
  isOpen: boolean,
  onRequestClose: Function
}

const overlayRules = css({
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  padding: 32,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  zIndex: ZZZ.MODAL,
})

const modalRules = css({
  overflow: 'auto',
  backgroundColor: 'transparent',
  outline: 0,
})

// @see: https://github.com/reactjs/react-modal#app-element
Modal.setAppElement('body')

export default (props: Props) => (
  <Modal
    bodyOpenClassName="scrollIsDisabled"
    className={`${modalRules}`}
    contentLabel="Modal"
    overlayClassName={`${overlayRules}`}
    {...props}
  >
    {props.children}
  </Modal>
)
