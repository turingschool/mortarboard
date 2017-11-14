// @flow
import React, { type Node } from 'react'
import glamorous from 'glamorous'
import Button from '../elements/Button'
import Heading from '../elements/Heading'
import { COLORS, MQ } from '../../constants/theme'

type Props = {
  cancelLabel?: string,
  children?: Node,
  confirmLabel?: string,
  handleCancel?: Function,
  handleConfirm?: Function,
  title?: string,
}

const Dialog = ({
  cancelLabel,
  children,
  confirmLabel,
  handleCancel,
  handleConfirm,
  title,
}: Props) => (
  <View>
    { title != null && <Heading>{title}</Heading> }
    { children != null && <Content>{children}</Content> }
    { (handleCancel || handleConfirm) &&
      <Actions>
        { handleCancel &&
          <Button box secondary onClick={handleCancel}>
            {cancelLabel}
          </Button>
        }
        { handleConfirm &&
          <Button box primary onClick={handleConfirm}>
            {confirmLabel}
          </Button>
        }
      </Actions>
    }
  </View>
)

Dialog.defaultProps = {
  cancelLabel: 'cancel',
  children: null,
  confirmLabel: 'confirm',
  handleCancel: null,
  handleConfirm: null,
  title: null,
}

export default Dialog

// -------------------------------------

const View = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: 112,
  [MQ.MIN_BREAK_31]: {
    width: 496,
  },
})

const Content = glamorous.div({
  width: '100%',
  marginTop: 16,
  marginBottom: 32,
  fontSize: 14,
  color: COLORS.GREY_8,
  [MQ.MIN_BREAK_31]: {
    marginBottom: 64,
  },
})

const Actions = glamorous.div({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridGap: 16,
  [MQ.MIN_BREAK_31]: {
    gridTemplateColumns: '1fr 1fr',
  },
})
